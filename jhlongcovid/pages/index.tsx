import { useEffect, useMemo, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map/Map";
import { Header } from "../components/Header/Header";
import { Marker } from "../components/Marker";
import { LeftSidePanel } from "../components/LeftSidePanel/LeftSidePanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectWidth, setDimensions } from "../redux/slices/viewportSlice";
import { selectZoom } from "../redux/slices/zoomSlice";
import { read } from "../util/mockDataTwo";
import { sumUpCases } from "./preprocess";
import Script from "next/script";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { initQuestions } from "../redux/slices/surveySlice";

Amplify.configure(awsExports);

const Home = () => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(selectWidth);
  const [county_data, setCountyData] = useState<any[]>([]);
  const [state_data, setStateData] = useState<any[]>([]);
  const [aggregateData, setAggregateData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const zoomNum = useAppSelector(selectZoom);

  //preprocess county vs state data
  //assumption: total of state data = total of county data
  const totalLongCovidCases = sumUpCases(state_data);
  const toggleAggregateDataOnZoom = () => {
    let markers = county_data;

    if (zoomNum >= 7) {
      markers = county_data;
    } else {
      markers = state_data;
    }

    setAggregateData(markers);
  };

  const setViewport = () => {
    dispatch(
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    );
  };

  // Memoize map to only re-render when data changes
  const MapMemo = useMemo(() => {
    return (
      <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }}>
        {aggregateData.map((data) => (
          <Marker
            key={`marker-${data.lat}-${data.long}`}
            center={{ lat: data.lat, lng: data.long }}
            radius={
              data.level === "state"
                ? (data.covidSummary.totalLongCovidCases /
                    totalLongCovidCases) *
                  5000000
                : (data.covidSummary.totalLongCovidCases /
                    totalLongCovidCases) *
                  10000000
            }
            data={data}
            setSelectedData={setSelectedData}
          />
        ))}
      </Map>
    );
  }, [aggregateData]);

  useEffect(() => {
    // set vp height and width and bind the set of the vp height and with on resize
    setViewport();
    window.addEventListener("resize", setViewport);

    const [county_data, state_data] = read();
    setStateData(state_data);
    setCountyData(county_data);
    return () => removeEventListener("resize", setViewport);
  }, []);

  useEffect(() => {
    toggleAggregateDataOnZoom();
  }, [zoomNum, state_data, county_data]);

  // Upon user sign in & component mount
  useEffect(() => {
    dispatch(initQuestions({ authId: null }));
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/apexcharts" />
      <Script src="https://cdn.jsdelivr.net/npm/react-apexcharts" />
      <div className={styles.main}>
        {MapMemo}
        <Header />
        <LeftSidePanel data={selectedData} />
      </div>
    </>
  );
};

export default Home;
