import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { IconFont, HeaderBars } from "../../components";
import style from "./index.module.less";
const { Header } = Layout;
export default function () {
  return (
    <Header className={`header ${style.my_layout_header}`}>
      <div className={style.my_layout_header_left}></div>
      <Row>
        <Col span={14}>
          <HeaderBars type='home' />
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