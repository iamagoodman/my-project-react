import { lazy } from 'react';
import { RouteItem } from "@/types";

const routes:RouteItem[] = [
  {
    key: 'about',
    path: '/about',
    component: lazy(() => import('../pages/about'))
  },
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('../pages/home'))
  }
];

export default routes;