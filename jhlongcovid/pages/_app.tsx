import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { createTheme, ThemeProvider } from "@mui/material";

const googleAPIKey = process.env.GOOGLEMAPS_API_KEY as string;

const theme = createTheme({
  palette: {
    primary: {
      main: "#002d74",
    },
    secondary: {
      main: "#f3c300",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: any) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper apiKey={googleAPIKey} render={render}>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
