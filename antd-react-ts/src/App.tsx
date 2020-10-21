import React from 'react';
import './App.less';
import { createSelector } from "reselect";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./stores/reducers";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Routes from "./router";
import { history } from "./utils/util";
import Cover from './pages/cover';
function App() {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router history={history}>
        <Route key='cover' path='/cover' component={Cover}/>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
