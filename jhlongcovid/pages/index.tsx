import { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";

const Home = () => {
  console.log("rendering home");
  return (
    <div className={styles.main}>
      <Map style={{ flexGrow: "1", height: "100vh", width: "100%" }} />
    </div>
  );
};

export default Home;
