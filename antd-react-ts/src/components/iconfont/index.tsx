import React from 'react';
import { Iconprops } from "../../types";

export const IconFont = function (props: Iconprops) {
  return (
    <i
      onClick={props.click}
      className={`iconfont ${props.name}`}
      style={{color:props.color,fontSize:props.size}}
    >
    </i>
  );
}