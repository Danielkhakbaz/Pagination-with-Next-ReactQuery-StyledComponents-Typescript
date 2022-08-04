import { PageActions } from "./page-actions";

type StateType = {
  page: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

export const PageReducers = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case PageActions.CHANGE_PAGE:
      const page = action.payload;

      return {
        ...state,
        page,
      };
    default:
      return state;
  }
};
