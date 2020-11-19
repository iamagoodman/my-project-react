import React,{ useState, useEffect, useLayoutEffect } from 'react';

export default function () {
  const [count,setcount] = useState(0);
  useEffect(()=>{  // 换成useLayoutEffect 也没发现什么不同
    if (count===10) {
      setcount(Math.random);
    }
  },[count])
  return(
    <button onClick={()=>{setcount(10)}}>click me {count} times</button>
  )
}
