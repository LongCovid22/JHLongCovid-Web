import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const googleAPIKey = process.env.GOOGLEMAPS_API_KEY as string;

function MyApp({ Component, pageProps }: any) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Provider store={store}>
      <Wrapper apiKey={googleAPIKey} render={render}>
        <Component {...pageProps} />;
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
