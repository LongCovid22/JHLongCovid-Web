import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import { Header } from "../components/Header/Header";
import { Marker } from "../components/Marker";
import { useAppSelector } from "../redux/hooks";

import { selectZoom } from "../features/zoom/zoomSlice";

import { read } from "../util/mockDataTwo";

import { sumUpCases } from "./preprocess";

const Home = () => {
  let county_data, state_data;
  [county_data, state_data] = read();
  const zoomNum = useAppSelector(selectZoom);

  //preprocess county vs state data
  //assumption: total of state data = total of county data
  const totalLongCovidCases = sumUpCases(state_data);

  let markers = county_data;

  if (zoomNum >= 6) {
    markers = county_data;
  } else {
    markers = state_data;
  }

  return (
    <>
      <div className={styles.main}>
        <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }}>
          {markers.map((mark) => (
            <Marker
              center={{ lat: mark.lat, lng: mark.long }}
              radius={
                mark.level === "state"
                  ? (mark.covidSummary.totalLongCovidCases /
                      totalLongCovidCases) *
                    5000000
                  : (mark.covidSummary.totalLongCovidCases /
                      totalLongCovidCases) *
                    10000000
              }
              covidSummary={mark.covidSummary}
              name={mark.name}
              level={mark.level}
              state={mark.stateName}
            />
          ))}
        </Map>
        <Header />
      </div>
    </>
  );
};

export default Home;
