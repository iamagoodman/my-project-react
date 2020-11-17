import React,{ useContext } from 'react';
import Mycontext from './context';

export default function() {
  const data = useContext(Mycontext)
  return (
    <div>
      {
        data.map((item)=>(
          <p key={item.name}>{item.name + item.sex}</p>
        ))
      }
    </div>
  )
}
