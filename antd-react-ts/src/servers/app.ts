import fetch from './http';
import fetchjs from './httpjs';   // 用js的axios代替ts的axios 发起请求，避免返回报文不同的ts类型校验
import url from './url';
import { from } from "rxjs";
import { RequestDataType, RequestLogin } from "../types";
const app = url.app;
export function fetchData() {
  return from(fetchjs.get(app.getdata))
}

export function fetchLogin(data: RequestLogin) {
  return from(fetchjs.get(app.login, {data}))
}