import React, { Suspense } from 'react';
import routes from "./routes";
import {Router, Route, Switch} from 'react-router-dom';
import { history } from "../utils/util";
import Layout from "../pages/layout/layout";
console.log(routes);
const RouteF = function() {
  return (
    <div>
      <Layout>
        <Suspense fallback='loading'>
          <Switch>
            {
              routes.map((item) =>{
                return <Route key={item.key} exact component={item.component} path={item.path} />
              })
            }
          </Switch>
        </Suspense>
      </Layout>
    </div>
  )
}

export default RouteF;