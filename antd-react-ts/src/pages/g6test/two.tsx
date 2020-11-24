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
      //@ts-ignore
      container: divref.current,
      width: 500,
      height: 500
    });
    graph.read(data);
    let node:any;
    let dx:any;
    let dy:any;
    graph.on('node:dragstart', (ev:any)=>{
      const {item} = ev;
      const model = item.getModel();
      node = item;
      dx = model.x - ev.x;
      dy = model.y - ev.y;
    });
    graph.on('node:drag', (ev:any)=>{
      node && graph.update(node, {
        x: ev.x+dx,
        y: ev.y+dy
      });
    });
    graph.on('node:dragend', (ev:any)=>{
      node = undefined;
    });
  },[])
  return (
    <div ref={divref}></div>
  )
}
