import React,{ useEffect } from 'react'
import G6 from '@antv/g6'

export default function () {
  const divref = React.useRef(null);
  const data = {
    nodes: [{
      id: 'node1',
      x: 100,
      y: 200
    },{
      id: 'node2',
      x: 300,
      y: 200
    }],
    edges: [{
      id: 'edge1',
      target: 'node2',
      source: 'node1'
    }]
  };
  useEffect(()=>{
    const graph = new G6.Graph({
      // @ts-ignore
      container: divref.current,
      width: 500,
      height: 500
    });
    graph.read(data);
  },[])
  return (
    <div ref={divref}></div>
  )
}
