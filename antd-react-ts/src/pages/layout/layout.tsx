import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps{
  children: React.ReactNode
}
function Layout(props: Props) {
  return (
    <div>
      <div>header</div>
      <div>
        {props.children}
      </div>
      <div>footer</div>
    </div>
  );
}

export default withRouter(Layout);