import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Drawer } from "antd";
import Login from '../login/login';
import { Layout } from "antd";
import LayoutHeader from './header';
import LayoutSilder from './sider';
import LayoutFooter from './footer';
import style from './index.module.less';
const { Content } = Layout;
interface Props extends RouteComponentProps{
  children: React.ReactNode
}
function myLayout(props: Props) {
  return (
    <Layout className={style.mp_layout}>
      <LayoutHeader />
      <Layout>
        <LayoutSilder />
        <Layout style={{ padding: '20px 30px' }} className={style.mp_layout_hidescroll}>
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <LayoutFooter />
      <Login />
    </Layout>
  );
}

export default withRouter(myLayout);