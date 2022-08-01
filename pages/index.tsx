import type { NextPage } from "next";
import Head from "next/head";
import { usePageContext, usePageAction } from "../providers/page/page-context";
import { PageActions } from "../providers/page/page-actions";
import Planets from "../components/planets/planets";
import People from "../components/people/people";

const Home: NextPage = () => {
  const { page } = usePageContext();
  const { dispatch } = usePageAction();

  return (
    <>
      <Head>
        <title>Home | Pagination App</title>
      </Head>

      <>
        <button
          onClick={() =>
            dispatch({ type: PageActions.CHANGE_PAGE, payload: page })
          }>
          Click
        </button>
        {page === "planets" ? <Planets /> : <People />}
      </>
    </>
  );
};

export default Home;
