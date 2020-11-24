import React,{ useEffect, useState } from 'react'
import G6 from '@antv/g6'

// 注册鼠标进入节点变红的行为
// @ts-ignore
G6.registerBehavior('mouseEnterFillRed', (graph:any)=>{
  graph.behaviourOn('node:mouseenter', (ev:any)=>{
    graph.update(ev.item, {
      color: 'red'
    });
  });
});

// 注册鼠标进入节点变绿的行为
// @ts-ignore
G6.registerBehavior('mouseEnterFillGreen', (graph:any)=>{
  graph.behaviourOn('node:mouseenter', (ev:any)=>{
    graph.update(ev.item, {
      color: 'green'
    });
  });
});

// 注册鼠标移出节点变原色的行为
// @ts-ignore
G6.registerBehavior('mouseLeaveResetFill', (graph:any)=>{
  graph.behaviourOn('node:mouseleave', (ev:any)=>{
    graph.update(ev.item, {
      color: '#2f54eb'
    });
  });
});

const data = {
  nodes: [
    {id:'事件',x:80,y:150},
    {id:'行为',x:200,y:150},
    {id:'模式',x:320,y:150}
  ],
  edges: [
    {source:'事件',target:'行为',label:'组成',},
    {source:'行为',target:'模式',label:'组成',}
  ]
}
export default function () {
  const divref = React.useRef(null);
  const [mode,setMode] = useState('red');
  let graph:any;
  function changeModel(){
    if (mode === 'red') {
      console.log(graph);
      console.log(graph.changeModel);
      graph.changeModel('green');
      setMode('green');
    } else {
      graph.changeModel('red');
      setMode('red');
    }
  }
  useEffect(()=>{
    if (!graph) {
      graph = new G6.Graph({
        //@ts-ignore
        container: divref.current,
        width: 500,
        height: 500,
        modes: {
          red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
          green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
        },
        mode
      });
      graph.node({
        label(model:any) {
          return model.id
        }
      });
      graph.edge({
        style() {
          return {
            endArrow: true
          }
        }
      });
    }
    graph.read(data);
  },[])
  return(
    <div>
      <button onClick={changeModel}>切换模式</button>
      <div ref={divref}></div>
    </div>
  )
}
