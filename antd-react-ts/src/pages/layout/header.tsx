import React from 'react';
import { Layout, Menu } from 'antd';
import style from "./index.module.less";
const { Header } = Layout;
export default function () {
  return (
    <Header className={`header ${style.my_layout_header}`}>
      {/*<div className="logo" />*/}
      <div className={style.my_layout_header_left}></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}