// @ts-ignore
import React from 'react';

const Resfinput = React.forwardRef((props:any,ref:any) => {
  // @ts-ignore
  return (
    <div>
      <p>{props.desc}</p>
      <input ref={ref}/>
    </div>
  )
})
export default Resfinput;
