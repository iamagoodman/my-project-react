import React from 'react';

interface Iconprops {
  name: string;
  size?: number;
  color?: string;
}
export const IconFont = function (props: Iconprops) {
  return (
    <i
      className={`iconfont ${props.name}`}
      style={{color:props.color,fontSize:props.size}}
    >
    </i>
  );
}