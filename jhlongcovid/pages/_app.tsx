import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { hopkinsBlue } from "../theme/styles";
import "../styles.css";
import React from "react";
import { MapProvider } from "../components/context/MapContext";
import { Global } from "@emotion/react";
import "../theme/assets/quadon/stylesheet.css";
import "../theme/assets/gentona/stylesheet.css";

const googleAPIKey = process.env.GOOGLEMAPS_API_KEY as string;

const theme = extendTheme({
  colors: {
    hopkinsBlue,
  },
  fonts: {
    heading: "'Gentona', sans-serif",
    body: "'Gentona', sans-serif",
  },
});

function MyApp({ Component, pageProps }: any) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Wrapper apiKey={googleAPIKey} render={render} libraries={["places"]}>
          <MapProvider>
            <Component {...pageProps} />
          </MapProvider>
        </Wrapper>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
