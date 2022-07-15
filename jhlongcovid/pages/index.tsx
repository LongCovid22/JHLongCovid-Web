import { useState } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import { Header } from "../components/Header/Header";
import { Flex, Spacer } from "@chakra-ui/react";
import { Marker } from "../components/Marker";
import { mockMapData } from "../mockData";

const Home = () => {
  const [data, setData] = useState(mockMapData);
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }}>
          {data.map((mark) => (
            <Marker position={{ lat: mark.lat, lng: mark.long }} />
          ))}
        </Map>
        <Header />
      </div>
    </>
  );
};

export default Home;
