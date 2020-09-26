import React from 'react';
import { Layout } from 'antd';
import style from "./index.module.less";
const { Footer } = Layout;

export default function () {
  return (
    <Footer className={`footer ${style.mp_layout_footer}`}>
      <div>footer</div>
    </Footer>
  );
}