import { lazy } from 'react';
import { RouteItem } from "@/types";
import g6Routes from "../pages/g6test/g6Routes";
const routes:RouteItem[] = [
  {
    key: 'about',
    path: '/about',
    component: lazy(() => import('../pages/about'))
  },
  {
    key: 'home',
    path: '/home', // 这才是首页别弄忘了。。。
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
  },
  {
    key: 'test',
    path:'test',
    component: lazy(() => import('../pages/testpage'))
  },
  ...g6Routes
];

export default routes;
