import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
// import { history } from '@/utils/util';
import { appReducer } from "./app";

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;