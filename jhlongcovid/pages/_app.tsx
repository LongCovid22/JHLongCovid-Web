import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { hopkinsBlue } from "../theme/styles";
import "./styles.css";
import React from "react";



const googleAPIKey = process.env.GOOGLEMAPS_API_KEY as string;

const theme = extendTheme({
  colors: {
    hopkinsBlue,
  },
});

function MyApp({ Component, pageProps }: any) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Wrapper apiKey={googleAPIKey} render={render}>
          <Component {...pageProps} />
        </Wrapper>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
