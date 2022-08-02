import type { NextPage } from "next";
import Head from "next/head";
import { usePageContext } from "../providers/page/page-context";
import Buttons from "../components/buttons/buttons";
import Planets from "../components/planets/planets";
import People from "../components/people/people";

const Home: NextPage = () => {
  const { page } = usePageContext();

  return (
    <>
      <Head>
        <title>Home | Pagination App</title>
      </Head>

      <>
        <Buttons />
        {page === "planets" ? <Planets /> : <People />}
      </>
    </>
  );
};

export default Home;
