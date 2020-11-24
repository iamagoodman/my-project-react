import React,{ useState, useEffect } from 'react';
import G6 from '@antv/g6';
import data from './data';
export default function () {
  // const divref: React.RefObject<HTMLDivElement> = React.createRef();
  const divref = React.useRef(null);
  let graph:any = null

  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        // @ts-ignore
        container: divref.current,
        width: 1200,
        height: 800,
        modes: {
          default: ['drag-canvas']
        },
        layout: {
          type: 'dagre',
          direction: 'LR'
        },
        defaultNode: {
          type: 'node',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10
            }
          },
          style: {
            stroke: '#72CC4A',
            width: 150
          }
        },
        defaultEdge: {
          type: 'polyline'
        }
      })
    }
    graph.data(data)
    graph.render()
  }, [])
  return(
    <div ref={divref}>

    </div>
  )
}
