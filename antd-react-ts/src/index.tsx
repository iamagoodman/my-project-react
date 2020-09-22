import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from 'react-redux';

import { rootEpic } from './stores/epics';
import rootReducer from './stores/reducers';
console.log(rootEpic);
console.log(rootReducer);

const epicMiddleWare = createEpicMiddleware(rootEipc);
const store = createStore(rootReducer, applyMiddleware(epicMiddleWare))
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
