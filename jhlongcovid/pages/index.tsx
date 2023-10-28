import { useEffect, useMemo, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map/Map";
import { Header } from "../components/Header/Header";
import { Marker } from "../components/Marker";
import { LeftSidePanel } from "../components/LeftSidePanel/LeftSidePanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectHeight,
  selectWidth,
  setDimensions,
} from "../redux/slices/viewportSlice";
import {
  selectZoom,
  selectLoLat,
  selectHighLat,
  selectLoLong,
  selectHighLong,
} from "../redux/slices/zoomSlice";
import { read } from "../util/mockDataTwo";
import { sumUpTotals } from "../preprocess";
import React from "react";
import { Amplify, API, Auth, graphqlOperation, Hub } from "aws-amplify";
import { CONNECTION_STATE_CHANGE, ConnectionState } from "@aws-amplify/pubsub";
import awsExports from "../src/aws-exports";
import awsconfig from "../src/aws-exports";
import { GraphQLSubscription, GraphQLQuery } from "@aws-amplify/api";
import {
  GetUserQuery,
  OnCreateMapDataSubscription,
  OnUpdateMapDataSubscription,
  User,
} from "../src/API";
import * as queries from "../src/graphql/queries";
import * as subscriptions from "../src/graphql/subscriptions";
import { resetUser, selectUser, setUser } from "../redux/slices/userSlice";
import {
  Text,
  Spinner,
  HStack,
  Center,
  Spacer,
  Slide,
  Image,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";
import {
  getAllMapData,
  calculateRadius,
  objectifyMapData,
  onUpdateMapDataCust,
  onCreateMapDataCust,
} from "../components/Map/mapFunctions";
import {
  selectDisplayData,
  updateAllStateData,
  updateAllCountyData,
  toggleDisplayData,
  updateCountyData,
  updateStateData,
  selectStateData,
  selectCountyData,
} from "../redux/slices/mapDataSlice";
import { Instructions } from "../components/Instructions/Instructions";
import { setLocation } from "../redux/slices/locationSlice";
import { FeedbackPanel } from "../components/Feedback/FeedbackPanel";
import { useOnCreateMapDataSubscription } from "../hooks/useOnCreateMapDataSubscription";
import { useOnUpdateMapDataSubscription } from "../hooks/useOnUpdateMapDataSubscription";

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
  const height = useAppSelector(selectHeight);
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const [realOrMock, setRealOrMock] = useState(RealOrMock.REAL);
  const [markerData, setMarkerData] = useState<IHash>({});
  const [loadingMapData, setLoadingMapData] = useState(false);
  const [markerType, setMarkerType] = useState<"totalLongCovid" | "totalCovid">(
    "totalLongCovid"
  );

  const [onUpdateMapDataSub, setOnUpdateMapDataSub] = useState<any>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showSurveyOnLaunch, setShowSurveyOnLaunch] = useState<boolean>(false);

  const stateData = useAppSelector(selectStateData);
  const countyData = useAppSelector(selectCountyData);
  const displayData = useAppSelector(selectDisplayData);
  const zoomNum = useAppSelector(selectZoom);
  const latLow = useAppSelector(selectLoLat);
  const latHigh = useAppSelector(selectHighLat);
  const longLow = useAppSelector(selectLoLong);
  const longHigh = useAppSelector(selectHighLong);
  const user = useAppSelector(selectUser);
  const [totals, setTotals] = useState(1);

  const toggleDisplayDataOnZoom = () => {
    dispatch(
      toggleDisplayData({
        realOrMock: realOrMock,
        zoomNum: zoomNum,
        latLow: latLow,
        latHigh: latHigh,
        longLow: longLow,
        longHigh: longHigh,
      })
    );
  };
  //to monitor new map data objects
  useOnCreateMapDataSubscription(toggleDisplayDataOnZoom, realOrMock);

  //to monitor for change in new map data objects
  useOnUpdateMapDataSubscription(toggleDisplayDataOnZoom, realOrMock);

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
          let graphqlResponse = error as { data?: GetUserQuery; errors: any[] };
          if (
            graphqlResponse &&
            graphqlResponse.data &&
            graphqlResponse.data.getUser
          ) {
            dispatch(setUser(graphqlResponse.data.getUser as User));
          } else {
            console.log("Error querying for user: ", error);
          }
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

  // Check local storage to check if user has ever entered the dashboard
  useEffect(() => {
    // setShowInstructions(true);
    let showedSurvey = localStorage.getItem("showedSurveyOnLaunch");
    if (showedSurvey === null) {
      // Check if instructions have been shown before
      let showedSurvey = localStorage.getItem("showedSurveyOnLaunch");
      if (showedSurvey === null) {
        localStorage.setItem("showedSurveyOnLaunch", JSON.stringify(true));
        setShowSurveyOnLaunch(true);
      }
    }
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(initQuestions(user));
  //   } else {
  //     dispatch(initQuestions(undefined));
  //   }
  // }, [user]);

  // Memoize map to only re-render when data changes
  const MapMemo = useMemo(() => {
    // console.log("Total long covid: ", totalLongCovidCases);
    // data.totalFullEntries >= 10 &&
    return (
      <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }}>
        {displayData.map((data) => {

          return (
             (
              <Marker
                key={`marker-${data.lat}-${data.long}`}
                center={{ lat: data.lat, lng: data.long }}
                type={markerType}
                data={data}
                radius={calculateRadius(data, totals, markerType, data.level, realOrMock)}
                total={totals}
                realOrMock={realOrMock}
                setSelectedData={setSelectedData}
                markerData={markerData}
                setMarkerData={setMarkerData}
              />
            ) 
          );
        })}
      </Map>

    );
  }, [displayData, markerType, markerData, totals, realOrMock]);

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
        let castedError = error as { data: GetUserQuery; errors: any[] };
        if (castedError.data && castedError.data.getUser) {
          dispatch(setUser(castedError.data.getUser as User));
        } else {
          console.log("Could not get authentication session: ", error);
        }
      }

      // Hub listener for auth events
      Hub.listen("auth", listenToAuthEvents);

      Hub.listen("api", (data: any) => {
        const { payload } = data;
        if (payload.event === CONNECTION_STATE_CHANGE) {
          const connectionState = payload.data
            .connectionState as ConnectionState;
          console.log(connectionState);
        }
      });

      // setOnCreateMapDataSub(subscription);
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
          const mapDataObject = objectifyMapData(mapData);

          const state_data = mapDataObject.state;
          const county_data = mapDataObject.county;

          setTotals(sumUpTotals(state_data, markerType, realOrMock));
          dispatch(updateAllStateData(state_data));
          dispatch(updateAllCountyData(county_data));
          setLoadingMapData(false);
        } catch (error) {
          console.log("Error getting map data: ", error);
          dispatch(updateAllStateData({}));
          dispatch(updateAllCountyData({}));
          setLoadingMapData(false);
        }
      } else {
        setLoadingMapData(true);
        const [county_data, state_data] = read();
        setTotals(sumUpTotals(state_data, markerType, realOrMock));
        dispatch(updateAllStateData(state_data));
        dispatch(updateAllCountyData(county_data));
        setLoadingMapData(false);
      }
    };

    switchData();
  }, [realOrMock]);

  useEffect(() => {
    setTotals(sumUpTotals(stateData, markerType, realOrMock));
  }, [stateData]);

  useEffect(() => {
    toggleDisplayDataOnZoom();
  }, [
    zoomNum,
    latLow,
    latHigh,
    longLow,
    longHigh,
    stateData,
    countyData,
    totals,
  ]);

  return (
    <>
      <div className={styles.main}>
        {MapMemo}
        <Header
          markerType={markerType}
          markerData={markerData}
          realOrMock={realOrMock}
          setRealOrMock={setRealOrMock}
          showInstructions={showInstructions}
          setShowInstructions={setShowInstructions}
          showSurveyOnLaunch={showSurveyOnLaunch}
          setShowSurveyOnLaunch={setShowSurveyOnLaunch}
          setMarkerType={setMarkerType}
        />
        <LeftSidePanel data={selectedData} realOrMock={realOrMock} />
        <Flex
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            background: "white",
            borderRadius: "500px",
            padding: "25px",
            height: "60px",
          }}
          shadow="xl"
        >
          <Spacer />
          <HStack spacing="10px" shadow={"xl"}>
            <Image
              src="./bloomberg.logo.horizontal.blue.jpg"
              alt="Hopkins Logo"
              w={"180px"}
              mt="5px"
            />
          </HStack>

          <Spacer />
        </Flex>
        <FeedbackPanel />
        <Slide
          direction="top"
          in={loadingMapData}
          style={{
            position: "absolute",
            top: loadingMapData ? "40px" : "0px",
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
              <Spinner color="heritageBlue.500" />
              <Spacer />
            </HStack>
          </Center>
        </Slide>
        <Instructions
          showInstructions={showInstructions}
          setShowInstructions={setShowInstructions}
        />
      </div>
    </>
  );
};

export default Home;
