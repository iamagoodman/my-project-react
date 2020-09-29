import React from 'react';
import style from './index.module.less';
import { Cardprops } from '../../types';
import { IconFont } from "../index";

function PlayCard(props:Cardprops) {
  const { margin, data, src } = props;
  return (
    <div className={style.img_container} style={{marginTop:margin.top,marginLeft:margin.left,marginBottom:margin.bottom,marginRight:margin.right,position:"relative"}}>
      {/*<span>{data&&data.desc}</span>*/}
      <span className={style.right_font}>
        <IconFont name='iconz'/>
        <span>20万</span>
      </span>
      <img src={src} alt=""/>
      <span>fdakjfdsakljffdsafsa反对开始啦就哭了反对撒会反对撒进来看klsa</span>
      {/*<span>{data&&data.playnum}</span>*/}
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