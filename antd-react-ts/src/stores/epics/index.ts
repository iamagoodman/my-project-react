import { combineEpics } from "redux-observable";
import app from './app';
import home from './home';
import play from './play';
export default combineEpics(
  ...app,
  ...home,
  ...play
);