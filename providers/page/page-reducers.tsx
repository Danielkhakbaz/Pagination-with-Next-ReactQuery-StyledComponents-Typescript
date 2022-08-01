import { PageActions } from "./page-actions";

export const PageReducers = (state: any, action: any) => {
  switch (action.type) {
    case PageActions.CHANGE_PAGE:
      const page = action.payload === "people" ? "planets" : "people";

      return {
        ...state,
        page,
      };
    default:
      return state;
  }
};
