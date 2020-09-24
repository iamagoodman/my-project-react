import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { createSelector } from "reselect";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./stores/reducers";
import { doChangeName } from "./stores/actions";
import ButtonComponent from './components/btncom';
function App() {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          type='primary'
          onClick={()=>{
            dispatch(doChangeName('frank'))
          }}
        >
          click me
        </Button>
        <ButtonComponent />
        <p>my name is{name}</p>
        <p>i am {age} years old</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
