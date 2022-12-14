import type { NextPage } from "next";
import Head from "next/head";
import { usePageContext } from "../providers/page/page-context";
import Planets from "../components/planets/planets";
import People from "../components/people/people";

const Home: NextPage = () => {
  const { content } = usePageContext();

  return (
    <>
      <Head>
        <title>Home | Pagination App</title>
      </Head>

      <>{content && (content === "planets" ? <Planets /> : <People />)}</>
    </>
  );
};

export default Home;
