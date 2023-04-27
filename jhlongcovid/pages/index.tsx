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
import { sumUpCases } from "../preprocess";
import React from "react";
import { Amplify, API, Auth, graphqlOperation, Hub } from "aws-amplify";
import { CONNECTION_STATE_CHANGE, ConnectionState } from "@aws-amplify/pubsub";
import { selectLeftSidePanelPres } from "../redux/slices/presentationSlice";
import awsExports from "../src/aws-exports";
import { initQuestions } from "../redux/slices/surveySlice/surveySlice";
import awsconfig from "../src/aws-exports";
import { GraphQLSubscription } from "@aws-amplify/api";
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
  Spinner,
  HStack,
  Center,
  Spacer,
  Slide,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import {
  getAllMapData,
  calculateRadius,
  objectifyMapData,
  onUpdateMapDataCust,
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
  const [onCreateMapDataSub, setOnCreateMapDataSub] = useState<any>(null);
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

  const [totalLongCovidCases, setTotalLongCovidCases] = useState(1);

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
        {displayData.map((data) => (
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
  }, [displayData]);

  useEffect(() => {
    const initApp = async () => {
      // set vp height and width and bind the set of the vp height and with on resize
      setViewport();
      window.addEventListener("resize", setViewport);

      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position) => {
      //     dispatch(
      //       setLocation({
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude,
      //       })
      //     );
      //   });
      // }

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

      // Hub listener for auth events
      Hub.listen("auth", listenToAuthEvents);

      // Create MapData subscriptions
      const onCreateSub = API.graphql<
        GraphQLSubscription<typeof subscriptions.onCreateMapData>
      >(graphqlOperation(subscriptions.onCreateMapData));
      onCreateSub.subscribe({
        next: ({ provider, value }) => {
          const v = value.data as OnCreateMapDataSubscription;
          const newMapData = v.onCreateMapData;
          if (newMapData) {
            if (newMapData.level === "county") {
              dispatch(updateCountyData(newMapData));
            } else {
              dispatch(updateStateData(newMapData));
            }
          } else {
            console.log("New map data is null");
          }
        },
        error: (error) => {},
      });

      const onUpdateSub = API.graphql<
        GraphQLSubscription<typeof subscriptions.onUpdateMapData>
      >(graphqlOperation(onUpdateMapDataCust));
      onUpdateSub.subscribe({
        next: ({ provider, value }) => {
          const v = value.data as OnUpdateMapDataSubscription;
          const newMapData = v.onUpdateMapData;
          if (newMapData) {
            if (newMapData.level === "county") {
              dispatch(updateCountyData(newMapData));
            } else {
              dispatch(updateStateData(newMapData));
            }
          } else {
            console.log("New map data is null");
          }
        },
        error: (error) => {},
      });

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

          setTotalLongCovidCases(sumUpCases(state_data, realOrMock));
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
        setTotalLongCovidCases(sumUpCases(state_data, realOrMock));
        dispatch(updateAllStateData(state_data));
        dispatch(updateAllCountyData(county_data));
        setLoadingMapData(false);
      }
    };

    switchData();
  }, [realOrMock]);

  useEffect(() => {
    setTotalLongCovidCases(sumUpCases(stateData, realOrMock));
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
    totalLongCovidCases,
  ]);

  return (
    <>
      <div className={styles.main}>
        {MapMemo}
        <Header
          markerData={markerData}
          realOrMock={realOrMock}
          setRealOrMock={setRealOrMock}
          showInstructions={showInstructions}
          setShowInstructions={setShowInstructions}
          showSurveyOnLaunch={showSurveyOnLaunch}
          setShowSurveyOnLaunch={setShowSurveyOnLaunch}
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
          <HStack spacing="10px">
            <Image
              src="./bloomberg.logo.horizontal.blue.jpg"
              alt="Hopkins Logo"
              w={"180px"}
              mt="5px"
            />
          </HStack>

          <Spacer />
        </Flex>
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
