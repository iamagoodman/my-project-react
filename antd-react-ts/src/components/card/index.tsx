import React from 'react';
import style from './index.module.less';
import { Cardprops } from '../../types';
import { IconFont } from "../index";
import { numtounit } from "../../utils/util";

function PlayCard(props:Cardprops) {
  const { margin, data, src, click } = props;
  return (
    <div
      onClick={()=>{click()}}
      className={style.img_container}
      style={{marginTop:margin.top,marginLeft:margin.left,marginBottom:margin.bottom,marginRight:margin.right,position:"relative"}}
    >
      <span className={style.right_font}>
        <IconFont name='iconz'/>
        <span>{data&&numtounit(data.playnum)}</span>
      </span>
      <img src={src} alt=""/>
      <span>{data&&data.desc}</span>
    </div>
  )
}

function DefaultCard(props:Cardprops) {
  const { margin, src } = props;
  return (
    <div className={style.img_container} style={{marginTop:margin.top,marginLeft:margin.left,marginBottom:margin.bottom,marginRight:margin.right}}>
      <img src={src} alt=""/>
    </div>
  );
}

export const Card = function (props:Cardprops) {
  const { type } = props;

  return (
      type==='playcard'? <PlayCard {...props} />:<DefaultCard {...props} />
    );
}