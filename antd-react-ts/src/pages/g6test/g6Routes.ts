import {lazy} from 'react';

export default [
  {
    key:'g6index',
    path:'/g6index',
    component: lazy(()=>import('./index'))
  },
  {
    key:'one',
    path:'/one',
    component: lazy(()=>import('./one'))
  },
  {
    key: 'two',
    path: 'two',
    component: lazy(()=>import('./two'))
  },
  {
    key: 'three',
    path: '/',
    component: lazy(()=>import('./three'))
  }
]
