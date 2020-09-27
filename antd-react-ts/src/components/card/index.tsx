import React from 'react';
import style from './index.module.less';
import { Cardprops } from '../../types';

export const Card = function (props:Cardprops) {
  const margin = props.margin;
  return (
    <div className={style.img_container} style={{marginTop:margin.top,marginLeft:margin.left,marginBottom:margin.bottom,marginRight:margin.right}}>
      <img src={props.src} alt=""/>
    </div>
  );
}