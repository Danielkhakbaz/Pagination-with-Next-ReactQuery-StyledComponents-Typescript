import { PageActions } from "./page-actions";

type StateType = {
  content: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

export const PageReducers = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case PageActions.CHANGE_CONTENT:
      const content = action.payload;

      return {
        ...state,
        content,
      };
    default:
      return state;
  }
};
