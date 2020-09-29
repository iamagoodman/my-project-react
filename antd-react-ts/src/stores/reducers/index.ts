import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import { history } from '../../utils/util';
import { appReducer } from './app';
import { homeReducer } from './home'
const rootReducer = combineReducers({
  router: connectRouter(history),
  app: appReducer,
  home: homeReducer
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;