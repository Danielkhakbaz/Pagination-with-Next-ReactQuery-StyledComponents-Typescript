import type { AppProps } from "next/app";
import Compose from "../utils/compose";
import PageProvider from "../providers/page/page-provider";
import Layout from "../layout/layout";

const Providers = [PageProvider, Layout];

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Compose providers={Providers}>
      <Component {...pageProps} />
    </Compose>
  );
};

export default MyApp;
