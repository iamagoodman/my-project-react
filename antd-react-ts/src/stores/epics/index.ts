import { combineEpics } from "redux-observable";
import app from './app';
import home from './home';
export default combineEpics(
  ...app,
  ...home
);