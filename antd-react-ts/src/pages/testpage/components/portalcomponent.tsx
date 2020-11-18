import React from 'react';
import ReactDOM from 'react-dom';
export default function (props:React.HTMLProps<any>) {
  const domNode = document.getElementsByTagName('body')[0];
  return ReactDOM.createPortal(
    props.children,
    domNode
  )
}
