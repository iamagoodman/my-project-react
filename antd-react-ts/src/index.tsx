import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import configureStore from "./stores/configureStore";
import { history } from "./utils/util";
import zhCN from 'antd/es/locale/zh_CN';
// import * as serviceWorker from './serviceWorker';
export const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    {/*<ConnectedRouter history={history}>*/}
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    {/*</ConnectedRouter>*/}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
