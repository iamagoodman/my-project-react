import React from "react";
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Layout from '../pages/layout';
import routes from './routes';

function CoreRoute() {
  return (
    <div>
      {/*<Layout>*/}
        <Suspense fallback='loading..........'>
          <Switch>
            {routes.map(({ key, ...props})=>{
              return <Route key={key} {...props} exact />
            })}
          </Switch>
        </Suspense>
      {/*</Layout>*/}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path='/' component={CoreRoute} />
    </Switch>
  )
}


export default React.memo(Router);
