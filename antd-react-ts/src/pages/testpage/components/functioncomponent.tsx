import React from 'react';
import { useState, useEffect } from 'react';
import { useMyHook } from '../myHook/index';
import Soncomponent from './soncomponent';
export default function () {
  const [count,setCount] = useState(0);
  const mystatus = useMyHook('456');
  // const mystatus = false;
  useEffect(() => {
    document.title = count+''
  })
  const handleClick = () => {
    setCount((count)=>(count+1))
  }
  return (
    <div>
      <button onClick={handleClick}>add count</button>
      {
        mystatus?<span>ok</span>:<span>no</span>
      }
      <Soncomponent />
    </div>
  )
}
