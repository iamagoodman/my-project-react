import fetch from './http';
import fetchjs from './httpjs';   // 用js的axios代替ts的axios 发起请求，避免返回报文不同的ts类型校验
import url from './url';
import { from } from "rxjs";
import { RequestDataType, RequestLogin } from "../types";
const app = url.app;
export function fetchData() {  // 测试
  return from(fetchjs.get(app.getdata))
}

export function fetchLogin(data: RequestLogin) {  // 登录
  return from(fetchjs.get(app.login, {data}))
}

export function fetchLoginStatus() {  // 登录状态
  return from(fetchjs.get(app.loginStatus))
}

export function fetchPlayList(data: any) {  // 获取歌单详情
  return from(fetchjs.get(app.playlist,{data}))
}

export function fetchSongUrl(data: any) {   // 获取歌曲url
  return from(fetchjs.get(app.songurl,{data}))
}