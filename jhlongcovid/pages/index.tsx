import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map/Map";
import { Header } from "../components/Header/Header";
import { Flex, Spacer } from "@chakra-ui/react";
import { Marker } from "../components/Marker";
import { mockMapData } from "../mockData";
import { LeftSidePanel } from "../components/LeftSidePanel/LeftSidePanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectWidth, setDimensions } from "../redux/slices/viewportSlice";

const Home = () => {
  const [data] = useState(mockMapData);
  const dispatch = useAppDispatch();
  const width = useAppSelector(selectWidth);

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
    return () => removeEventListener("resize", setViewport);
  }, []);

  return (
    <>
      <div className={styles.main}>
        <Map
          style={{ flexGrow: "1", height: "100vh", width: "100%" }}
          data={data}
        />
        <Header />
        <LeftSidePanel />
      </div>
    </>
  );
};

export default Home;
