import React from 'react';
import { useState } from 'react';
// render prop
function Move(props:{target:{x:number,y:number}}) {
  return(
    <div style={{position:'absolute',width:'5px',height:'5px',background:'red',top:props.target.x,left:props.target.y}}></div>
  )
}

interface Props {
  render: any
}
function Mouse(props:Props) {
  const [target,setTarget] = useState({x:0,y:0})
  function mouseMove(e: { clientX:any, clientY:any }) {
    setTarget({x:e.clientX,y:e.clientY});
  }
  return (
    <div style={{height:'300px',border:'1px solid #ddd'}} onMouseMove={mouseMove}>
      {props.render(target)}
    </div>
  )
}

export default function () {
  return (
    <div>
      <p>test mouse move</p>
      <p>created by renderprop</p>
      <Mouse render={(target:{x:number,y:number})=>(<Move target={target} />)} />
    </div>
  )
}
