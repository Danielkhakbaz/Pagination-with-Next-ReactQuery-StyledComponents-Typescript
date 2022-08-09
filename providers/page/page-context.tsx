import { createContext, useContext } from "react";

type PageContextType = {
  content: string;
};

export const PageContextDefaultValue: PageContextType = {
  content: "",
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
