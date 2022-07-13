import { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import { Header } from "../components/Header/Header";
import { Flex, Spacer } from "@chakra-ui/react";

const Home = () => {
  console.log("rendering home");
  return (
    <>
      <div className={styles.main}>
        <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }} />
        <Header />
      </div>
    </>
  );
};

export default Home;
