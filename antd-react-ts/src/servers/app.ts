import fetch from './http';
import url from './url';
import { from } from "rxjs";
import { RequestDataType } from "../types";
const geturl = url.app.getdata;

export function fetchData() {
  return from(fetch.get(geturl,{name:'frank'}))
}