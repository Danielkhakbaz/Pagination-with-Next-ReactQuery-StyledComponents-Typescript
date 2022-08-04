import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Compose from "../utils/compose";
import PageProvider from "../providers/page/page-provider";
import Layout from "../layout/layout";

const Providers = [PageProvider, Layout];

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Compose providers={Providers}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Compose>
  );
};

export default MyApp;
