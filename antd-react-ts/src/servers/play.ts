import fetchjs from './httpjs';   // 用js的axios代替ts的axios 发起请求，避免返回报文不同的ts类型校验
import url from './url';
import { from } from "rxjs";
import { RequestLyric } from "../types";
const play = url.play;

export function fetchLyric(data:RequestLyric) {
  return from(fetchjs.get(play.lyric, {data}))
}