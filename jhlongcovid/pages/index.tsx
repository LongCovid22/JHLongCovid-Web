import { useEffect, useState } from "react";
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

const Home = () => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(selectWidth);
  const [county_data, setCountyData] = useState<any[]>([]);
  const [state_data, setStateData] = useState<any[]>([]);

  const zoomNum = useAppSelector(selectZoom);

  //preprocess county vs state data
  //assumption: total of state data = total of county data
  const totalLongCovidCases = sumUpCases(state_data);

  let markers = county_data;

  if (zoomNum >= 7) {
    markers = county_data;
  } else {
    markers = state_data;
  }

  const setViewport = () => {
    dispatch(
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    );
  };

  useEffect(() => {
    // set vp height and width and bind the set of the vp height and with on resize
    setViewport();
    window.addEventListener("resize", setViewport);

    const [county_data, state_data] = read();
    setStateData(state_data);
    setCountyData(county_data);

    return () => removeEventListener("resize", setViewport);
  }, []);

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
        <LeftSidePanel />
      </div>
    </>
  );
};

export default Home;
