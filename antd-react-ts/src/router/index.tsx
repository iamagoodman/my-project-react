import React from "react";
import { Suspense, lazy } from 'react';
import { Switch, Route, Router, withRouter, BrowserRouter } from 'react-router-dom';
import Layout from '../pages/layout/layout';
import routes from './routes';
import { RouteItem } from "@/types";
import Home from '../pages/home';

function CoreRoute() {
  return (
    <div>
      <Layout>
        <Suspense fallback='loading..........'>
          <BrowserRouter>
            <Switch>
              {routes.map(({key, children, ...props}:RouteItem) => {
                return <Route key={key} {...props} exact/>
              })}
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Layout>
    </div>
  );
}

function RouterAll() {
  return (
    <Switch>
      <Route path='/' component={CoreRoute} />
    </Switch>
  )
}


export default React.memo(RouterAll);