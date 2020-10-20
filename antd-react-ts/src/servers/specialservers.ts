import fetchjs from './httpjs';
import url from './url';
// 目的是在需要回调的函数里
export const fetchbanner = async () => {
  return await fetchjs.get(url.home.getbanner);
}

export const fetchsongurl = async (data:any) => {
  return await fetchjs.get(url.app.songurl,data)
}

export const fetchlyric = async (data:any) => {
  return await fetchjs.get(url.play.lyric,data)
}