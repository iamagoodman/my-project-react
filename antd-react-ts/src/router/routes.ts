import { lazy } from 'react';

const routes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('../pages/home'))
  },
  {
    key: 'about',
    path: '/about',
    component: lazy(() => import('../pages/about'))
  }
];

export default routes;