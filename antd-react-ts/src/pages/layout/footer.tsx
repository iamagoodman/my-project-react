import React from 'react';
import { Layout, Row, Col } from 'antd';
import { IconFont } from "../../components";
import style from "./index.module.less";
const { Footer } = Layout;

export default function () {
  return (
    <Footer className={`footer ${style.mp_layout_footer}`}>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <div className={style.icon_list}>
            <span>
              <IconFont name='iconheart' size={20} />
            </span>
            <span className={style.play}>
              <IconFont name='iconarrow-left-filling' color='#e31e10' size={25} />
              <IconFont name='iconzanting' color='#e31e10' size={34} />
              <IconFont name='iconarrow-right-filling' color='#e31e10' size={25} />
            </span>
            <span>
              <IconFont name='icondelete_icon' size={16} />
            </span>
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </Footer>
  );
}