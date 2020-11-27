import {lazy} from "react";

export default [
  {
    key: 'table',
    path: '/table',
    component: lazy(() => import('./table'))
  },
  {
    key: 'echarts',
    path: '/echarts',
    component: lazy(() => import('./testecharts'))
  },
  {
    key: 'tree',
    path: '/tree',
    component: lazy(() => import('./treeselect'))
  }
]
