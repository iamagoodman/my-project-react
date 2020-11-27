import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function () {
  const data = {
    "name": "flare",
    itemStyle: {
      color: 'green',
      opacity: 1
    },
    label: {
      color: 'red'
    },
    "children": [
      {
        "name": "data",
        "children": [
          {
            "name": "converters",
            "children": [
              {"name": "Converters", "value": 721},
              {"name": "DelimitedTextConverter", "value": 4294}
            ]
          },
          {
            "name": "DataUtil",
            "value": 3322
          }
        ]
      },

      {
        "name": "flex",
        "children": [
          {
            "name": "FlareVis",
            "value": 4116,
          }
        ]
      },

      {
        "name": "scale",
        itemStyle: {
          color: 'green',
          opacity: 1
        },
        label: {
          color: 'red'
        },
        "children": [
          {"name": "IScaleMap", "value": 2105},
          {
            "name": "LinearScale",
            "value": 1316,
            itemStyle: {
              color: 'transparent'
            },
            label: {
              color: 'white',
              backgroundColor: 'red'
            }

          },

        ]
      }
    ]
  };

  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series:[
      {
        type: 'tree',
        id: 0,
        name: 'tree1',
        data: [data],
        top: '10%',
        left: '0',
        bottom: '10%',
        right: '0',
        orient: 'vertical',
        symbolSize: 7,
        symbol: 'emptyCircle',
        edgeShape: 'polyline',
        edgeForkPosition: '63%',
        initialTreeDepth: 3,

        lineStyle: {
          width: 2
        },
        label: {
          padding:5,
          position: 'center',
          verticalAlign: 'middle',
          align: 'center',
          backgroundColor:'#ddd'
        },

        leaves: {
          label: {
            position: 'center',
            verticalAlign: 'middle',
            align: 'center'
          }
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };
  return (
    <div>
      <ReactEcharts
        style={{ height: 500, width: 500 }}
        notMerge
        lazyUpdate
        option={option} />
    </div>
  )
}
