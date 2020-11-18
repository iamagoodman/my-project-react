import React, { useRef } from 'react';

export default function () {
  const inputref = useRef(null);
  function handleClick() {
    // @ts-ignore
    inputref.current.focus();
    console.log(inputref);
  }
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
