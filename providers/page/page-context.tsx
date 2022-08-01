import { createContext, useContext } from "react";

type PageContextTypes = {
  page: string;
};

export const PageContextDefaultValue: PageContextTypes = {
  page: "planets",
};

type PageActionTypes = {
  dispatch?: any;
};

export const PageActionDefaultValue: PageActionTypes = {
  dispatch: () => {},
};

export const PageContext = createContext(PageContextDefaultValue);
export const PageAction = createContext(PageActionDefaultValue);

export const usePageContext = () => {
  return useContext(PageContext);
};
export const usePageAction = () => {
  return useContext(PageAction);
};
