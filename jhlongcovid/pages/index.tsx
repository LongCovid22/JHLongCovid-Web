import { useEffect, useMemo, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map/Map";
import { Header } from "../components/Header/Header";
import { Marker } from "../components/Marker";
import { LeftSidePanel } from "../components/LeftSidePanel/LeftSidePanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectWidth, setDimensions } from "../redux/slices/viewportSlice";
import {
  selectZoom,
  selectLoLat,
  selectHighLat,
  selectLoLong,
  selectHighLong,
} from "../redux/slices/zoomSlice";
import { read } from "../util/mockDataTwo";
import { sumUpCases } from "../preprocess";
import React from "react";
import { Amplify, API, Auth, Hub } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { initQuestions } from "../redux/slices/surveySlice/surveySlice";
import awsconfig from "../src/aws-exports";
import { GetUserQuery, User } from "../src/API";
import * as queries from "../src/graphql/queries";
import { resetUser, selectUser, setUser } from "../redux/slices/userSlice";
import {
  Spinner,
  HStack,
  Center,
  Spacer,
  Slide,
  Button,
} from "@chakra-ui/react";
import { getAllMapData, calculateRadius } from "../components/Map/mapFunctions";

Amplify.configure(awsconfig);
Amplify.configure(awsExports);

interface IHash {
  [name: string]: google.maps.Circle;
}

export enum RealOrMock {
  REAL = "REAL",
  MOCK = "MOCK",
}

const Home = () => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(selectWidth);
  const [county_data, setCountyData] = useState<any[]>([]);
  const [state_data, setStateData] = useState<any[]>([]);
  const [aggregateData, setAggregateData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const [realOrMock, setRealOrMock] = useState(RealOrMock.REAL);
  const [markerData, setMarkerData] = useState<IHash>({});
  const [loadingMapData, setLoadingMapData] = useState(false);

  const zoomNum = useAppSelector(selectZoom);
  const latLow = useAppSelector(selectLoLat);
  const latHigh = useAppSelector(selectHighLat);
  const longLow = useAppSelector(selectLoLong);
  const longHigh = useAppSelector(selectHighLong);
  const user = useAppSelector(selectUser);

  const [totalLongCovidCases, setTotalLongCovidCases] = useState(1);
  const toggleAggregateDataOnZoom = () => {
    let markers = [];
    if (zoomNum >= 8) {
      let array = [];
      for (let i = 0; i < county_data.length; i++) {
        let county = county_data[i];
        if (
          latLow <= county.lat &&
          county.lat <= latHigh &&
          longLow <= county.long &&
          county.long <= longHigh
        ) {
          array.push(county);
        }
      }
      setAggregateData(array);
    } else if (zoomNum < 8) {
      markers = state_data;
      setAggregateData(markers);
    }
  };

  const listenToAuthEvents = async (data: any) => {
    switch (data.payload.event) {
      case "signIn":
        try {
          const userSession = await Auth.currentAuthenticatedUser();
          const user = (await API.graphql({
            query: queries.getUser,
            variables: { id: userSession.username },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          })) as { data: GetUserQuery; errors: any[] };
          if (user.data.getUser === null) {
            console.log("User is null in DynamoDB");
          } else {
            dispatch(setUser(user.data.getUser as User));
          }
          break;
        } catch (error) {
          console.log("Error querying for user: ", error);
          break;
        }
      case "signOut":
        dispatch(resetUser());
        break;
      default:
        break;
      // dispatch(setUser(null));
    }
  };

  const setViewport = () => {
    dispatch(
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    );
  };

  useEffect(() => {
    if (user) {
      dispatch(initQuestions({ authId: user.id }));
    } else {
      dispatch(initQuestions({ authId: null }));
    }
  }, [user]);

  // Memoize map to only re-render when data changes
  const MapMemo = useMemo(() => {
    // console.log("re-render map");

    return (
      <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }}>
        {aggregateData.map((data) => (
          <Marker
            key={`marker-${data.lat}-${data.long}`}
            center={{ lat: data.lat, lng: data.long }}
            // radius={
            //   data.level === "state"
            //     ? (data.longCovid / totalLongCovidCases) * 1000000
            //     : (data.longCovid / totalLongCovidCases) * 1000000
            // }
            radius={calculateRadius(
              data.longCovid,
              totalLongCovidCases,
              data.level,
              realOrMock
            )}
            data={data}
            setSelectedData={setSelectedData}
            markerData={markerData}
            setMarkerData={setMarkerData}
          />
        ))}
      </Map>
    );
  }, [aggregateData]);

  useEffect(() => {
    const initApp = async () => {
      // set vp height and width and bind the set of the vp height and with on resize
      setViewport();
      window.addEventListener("resize", setViewport);

      try {
        const userSession = await Auth.currentAuthenticatedUser();
        const user = (await API.graphql({
          query: queries.getUser,
          variables: { id: userSession.username },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        })) as { data: GetUserQuery; errors: any[] };
        if (user.data.getUser === null) {
          console.log("User is null in DynamoDB");
        } else {
          dispatch(setUser(user.data.getUser as User));
        }
      } catch (error) {
        console.log("Could not get authentication session: ", error);
      }

      // console.log("INIT USER: ", user);

      // Hub listener for auth events
      Hub.listen("auth", listenToAuthEvents);
    };

    initApp();
    return () => {
      removeEventListener("resize", setViewport);
      Hub.remove("auth", listenToAuthEvents);
    };
  }, []);

  useEffect(() => {
    const switchData = async () => {
      if (realOrMock == RealOrMock.REAL) {
        // Query for map Data
        setLoadingMapData(true);

        try {
          const mapData = await getAllMapData(null);

          const state_data = mapData.filter(
            (data: any) => data.level === "state"
          );
          const county_data = mapData.filter(
            (data: any) => data.level === "county"
          );
          setTotalLongCovidCases(sumUpCases(state_data));
          setStateData(state_data);
          setCountyData(county_data);
          setLoadingMapData(false);
        } catch (error) {
          console.log("Error getting map data: ", error);
          setStateData([]);
          setCountyData([]);
          setLoadingMapData(false);
        }
      } else {
        setLoadingMapData(true);
        const [county_data, state_data] = read();
        setTotalLongCovidCases(sumUpCases(state_data));
        setStateData(state_data);
        setCountyData(county_data);
        setLoadingMapData(false);
      }
    };

    switchData();
  }, [realOrMock]);

  useEffect(() => {
    toggleAggregateDataOnZoom();
  }, [zoomNum, latLow, latHigh, longLow, longHigh, state_data, county_data]);

  return (
    <>
      <div className={styles.main}>
        {MapMemo}
        <Header
          markerData={markerData}
          realOrMock={realOrMock}
          setRealOrMock={setRealOrMock}
        />
        <LeftSidePanel data={selectedData} />
        <Slide
          direction="top"
          in={loadingMapData}
          style={{
            position: "absolute",
            top: loadingMapData ? "20px" : "0px",
          }}
        >
          <Center>
            <HStack
              background={"white"}
              w="60px"
              p="10px"
              borderRadius={"500px"}
              shadow="xl"
            >
              <Spacer />
              <Spinner color="hopkinsBlue.500" />
              <Spacer />
            </HStack>
          </Center>
        </Slide>
      </div>
    </>
  );
};

export default Home;
