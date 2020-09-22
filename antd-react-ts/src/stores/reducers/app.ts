import {
  WIKI_REQUEST,
  WIKI_SUCCESS,
  WIKI_FAIL
} from "../actions";

const initialState = {
  wikis: []
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case WIKI_REQUEST:
      return {
        ...state
      };
    case WIKI_SUCCESS:
      return {
        wikis: [...action.payload]
      };
    case WIKI_FAIL:
      return {
        wikis: []
      }
    default:
      return state;
  }
}