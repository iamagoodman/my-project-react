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
  },
  {
    key: 'playlist',
    path: '/playlist',
    component: lazy(() => import('../pages/playlist'))
  },
  {
    key: 'song',
    path: '/song',
    component: lazy(() => import('../pages/song'))
  }
];

export default routes;