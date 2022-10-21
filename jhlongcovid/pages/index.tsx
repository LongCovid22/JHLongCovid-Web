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
import Script from "next/script";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { initQuestions } from "../redux/slices/surveySlice";

Amplify.configure(awsExports);

interface IHash {
  [name: string]: google.maps.Circle;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(selectWidth);
  const [county_data, setCountyData] = useState<any[]>([]);
  const [state_data, setStateData] = useState<any[]>([]);
  const [aggregateData, setAggregateData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const [map, setMap] = useState<google.maps.Map>();

  const [markerData, setMarkerData] = useState<IHash>({});

  const zoomNum = useAppSelector(selectZoom);
  const latLow = useAppSelector(selectLoLat);
  const latHigh = useAppSelector(selectHighLat);
  const longLow = useAppSelector(selectLoLong);
  const longHigh = useAppSelector(selectHighLong);

  // let lat = {
  //   lo : useAppSelector(selectLoLat),
  //   high: useAppSelector(selectHighLat),
  // }

  // let long = {
  //   lo: useAppSelector(selectLoLong),
  //   high: useAppSelector(selectHighLong)
  // }

  //preprocess county vs state data
  //assumption: total of state data = total of county data
  const totalLongCovidCases = sumUpCases(state_data);
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
      // markers = array;

      setAggregateData(array);

      // setTimeout(() => {

      //   console.log('third');

      //   for(let i = 0; i < county_data.length; i++) {
      //     let county = county_data[i];
      //     if((latLow * 0.90 <= county.lat && county.lat <= latHigh *1.1
      //       && longLow * 1.1 <= county.long && county.long <= longHigh *0.95)

      //       && !(latLow <= county.lat && county.lat <= latHigh
      //         && longLow <= county.long && county.long <= longHigh)) {
      //       array.push(county);
      //     }
      //   }
      //   setAggregateData(array);

      // }, 5000);
    } else if (zoomNum < 8) {
      markers = state_data;
      setAggregateData(markers);
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

  // Memoize map to only re-render when data changes
  const MapMemo = useMemo(() => {
    // console.log("re-render map");

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
            markerData={markerData}
            setMarkerData={setMarkerData}
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
    console.log("zoomNum", zoomNum);
    toggleAggregateDataOnZoom();
  }, [zoomNum, latLow, latHigh, longLow, longHigh, state_data, county_data]);

  // Upon user sign in & component mount
  useEffect(() => {
    dispatch(initQuestions({ authId: null }));
  }, []);

  return (
    <>
      <div className={styles.main}>
        {MapMemo}
        <Header markerData={markerData} />
        <LeftSidePanel data={selectedData} />
      </div>
    </>
  );
};

export default Home;
