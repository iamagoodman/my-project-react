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
    path: '/three',
    component: lazy(()=>import('./three'))
  },
  {
    key: 'tupu',
    path: '/tupu',
    component: lazy(()=>import('./tupu'))
  },
  {
    key: 'jiedian',
    path: '/jiedian',
    component: lazy(()=>import('./jiedian'))
  },
  {
    key: 'zidingyijiedian',
    path: '/zidingyijiedian',
    component: lazy(()=>import('./zidingyijiedian'))
  },
  {
    key: 'changeData',
    path: '/',
    component: lazy(()=>import('./changeData'))
  }
]
