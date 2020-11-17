import React from 'react';
import { useState, useEffect } from 'react';

export function useMyHook(id:any) {
  const data = [
    {id:'123',status:true},
    {id:'456',status:false},
    {id:'789',status:true}
  ]
  const [status,setStatus] = useState(null);
  const handleStatus = (data:any) => {
    setStatus(data.status);
  }
  useEffect(() => {
    let current = data.filter((item)=>(item.id==id))
    handleStatus(current);
  })
  return status;
}

