import { createContext, useContext } from "react";

type PageContextType = {
  page: string;
};

export const PageContextDefaultValue: PageContextType = {
  page: "",
};

type PageActionType = {
  dispatch?: Function | any;
};

export const PageActionDefaultValue: PageActionType = {
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
