import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import style from "./index.module.less";
const { Header } = Layout;
export default function () {
  return (
    <Header className={`header ${style.my_layout_header}`}>
      {/*<div className="logo" />*/}
      <div className={style.my_layout_header_left}></div>
      {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
      {/*  <Menu.Item key="1">nav 1</Menu.Item>*/}
      {/*  <Menu.Item key="2">nav 2</Menu.Item>*/}
      {/*  <Menu.Item key="3">nav 3</Menu.Item>*/}
      {/*  <Menu.Item key="3">nav 3</Menu.Item>*/}
      {/*</Menu>*/}
      <Row>
        <Col span={14}>
          <div className="my_menu_container">
            <div className="my_menu_item">歌单</div>
            <div className="my_menu_item">主播电台</div>
            <div className="my_menu_item">排行榜</div>
            <div className="my_menu_item">歌手</div>
            <div className="my_menu_item">最新音乐</div>
          </div>
        </Col>
        <Col span={5}>

        </Col>
        <Col span={5}>

        </Col>
      </Row>
    </Header>
  );
}