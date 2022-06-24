import { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Header from "../components/Header";

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
