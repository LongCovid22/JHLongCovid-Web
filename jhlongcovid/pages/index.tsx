import { useState } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import { Header } from "../components/Header/Header";
import { Flex, Spacer } from "@chakra-ui/react";
import { Marker } from "../components/Marker";
import { mockMapData } from "../mockData";

const Home = () => {
  const [data, setData] = useState(mockMapData);

  return (
    <>
      <div className={styles.main}>
        <Map
          style={{ flexGrow: "1", height: "100vh", width: "100%" }}
          data={data}
        />
        <Header />
      </div>
    </>
  );
};

export default Home;
