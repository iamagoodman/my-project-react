import React from 'react';
import './App.less';
import './styles/Global.less';
import { createSelector } from "reselect";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./stores/reducers";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router";
function App() {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
