import React from 'react';
import './App.less';
import './styles/Global.less';
import { createSelector } from "reselect";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./stores/reducers";
import { BrowserRouter, Router } from "react-router-dom";
import Routes from "./router";
import { history } from "./utils/util";

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
        <Routes />
      </Router>
    </div>
  );
}

export default App;
