import fetch from './http';
import url from './url';
import { from } from "rxjs";
import { RequestDataType } from "../types";
const app = url.app;
export function fetchData() {
  return from(fetch.get(app.getdata,{name:'frank'}))
}

export function fetchLogin(data: any) {
  return from(fetch.get(app.login,{...data}))
}