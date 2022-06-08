import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)};
    </Provider>
  );
}

export default MyApp;
