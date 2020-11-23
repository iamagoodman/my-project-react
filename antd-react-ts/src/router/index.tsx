import React from "react";
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../pages/layout/layout';
import routes from './routes';
import { RouteItem } from "@/types";

function CoreRoute() {
  return (
    <div>
      <Layout>
        <Suspense fallback='loading..........'>
          {/*<BrowserRouter forceRefresh basename='/'>*/}
            <Switch>
              {routes.map(({key, children, ...props}:RouteItem) => {
                return <Route key={key} {...props} exact/>
              })}
            </Switch>
          {/*</BrowserRouter>*/}
        </Suspense>
      </Layout>
    </div>
  );
}

function RouterAll() {
  return (
    <div></div>
    // <Switch>
    //   <Route path='/' components={CoreRoute} />
    // </Switch>
  )
}


export default React.memo(CoreRoute);
