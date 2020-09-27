import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { IconFont } from "../../components";
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
          <div className={style.my_menu_container}>
            <div className={style.my_menu_item}>
              <Link className={style.active_font} to='/about'>歌单</Link>
            </div>
            <div className={style.my_menu_item}>主播电台</div>
            <div className={style.my_menu_item}>排行榜</div>
            <div className={style.my_menu_item}>歌手</div>
            <div className={style.my_menu_item}>最新音乐</div>
          </div>
        </Col>
        <Col span={5}>
          <div className={style.my_menu_search}>
            <span className={style.my_menu_search_icon}>
              <IconFont name='iconsearch2' size={16} color='#404040' />
            </span>
            <input
              type="text"
              placeholder='搜索'
              className={style.my_menu_search_input}
              onChange={(e) => {console.log(e.target.value)}}
            />
          </div>
        </Col>
        <Col span={5}>
          {/*<div className={style.my_menu_tools}>*/}
          {/*  <div className={style.my_menu_tools_item}>*/}
          {/*    <IconFont name='iconSettingscontroloptions' size={16} color='#404040' />*/}
          {/*  </div>*/}
          {/*  <div className={style.my_menu_tools_item}>*/}
          {/*    <IconFont name='iconmessage2' size={16} color='#404040' />*/}
          {/*  </div>*/}
          {/*  <div className={style.my_menu_tools_item}>*/}
          {/*    <IconFont name='iconskin2' size={16} color='#404040' />*/}
          {/*  </div>*/}
          {/*  <div className={style.my_menu_tools_item}>*/}
          {/*    <IconFont name='iconmore' size={16} color='#404040' />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <Row>
            <Col span={6}>
              <IconFont name='iconSettingscontroloptions' size={20} color='#404040' />
            </Col>
            <Col span={6}>
              <IconFont name='iconmessage2' size={18} color='#404040' />
            </Col>
            <Col span={6}>
              <IconFont name='iconskin2' size={16} color='#404040' />
            </Col>
            <Col span={6}>
              <IconFont name='iconmore' size={16} color='#404040' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}