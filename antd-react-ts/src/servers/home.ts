import fetch from './http';
import fetchjs from './httpjs';
import url from './url';
import { from } from "rxjs";
const home = url.home;
export function fetchBanner() {  // 用js的axios代替ts的axios 发起请求，避免返回报文不同的ts类型校验
  // return from(fetch.get(getbanner))
  return from(fetchjs.get(home.getbanner))
}

export function fetchRecommendSong() {
  return from(fetchjs.get(home.recommendSong))
}