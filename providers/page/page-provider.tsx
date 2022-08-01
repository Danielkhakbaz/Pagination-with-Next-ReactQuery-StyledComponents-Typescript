import { useReducer } from "react";
import { PageReducers } from "./page-reducers";
import { PageContext, PageAction } from "./page-context";

type Props = {
  children: React.ReactNode;
};

const PageProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    page: "planets",
  };
  const [state, dispatch] = useReducer(PageReducers, initialState);

  return (
    <PageContext.Provider value={{ ...state }}>
      <PageAction.Provider value={{ dispatch }}>{children}</PageAction.Provider>
    </PageContext.Provider>
  );
};

export default PageProvider;
