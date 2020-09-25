import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { createSelector } from "reselect";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./stores/reducers";
import { BrowserRouter } from "react-router-dom";
import { doChangeName } from "./stores/actions";
import ButtonComponent from './components/btncom';
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
