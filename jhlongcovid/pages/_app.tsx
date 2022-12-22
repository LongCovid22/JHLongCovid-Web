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

// const Fonts = () => (
//   <Global
//     styles={`
//       @font-face {
//         font-family: 'Heading Quadon';
//         font-style: normal;
//         font-display: swap;
//         font-weight: 700;
//         src: url('../theme/assets/quadon/Quadon-Bold.woff2') format('woff2'),'../theme/assets/quadon/Quadon-Bold.woff' format('woff');
//         unicode-range: unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }
//       @font-face {
//         font-family: 'Body Quadon';
//         font-style: normal;
//         font-display: swap;
//         font-weight: 400;
//         src: url('../theme/assets/quadon/Quadon-Regular.woff2') format('woff2'),'../theme/assets/quadon/Quadon-Regular.woff' format('woff');
//         unicode-range: unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }
//       `}
//   />
// );

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
