import React,{ useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/reducers';
import { doLyricList } from '../../stores/actions';
import { turntoNum } from "../../utils/util";
import style from './index.module.less';
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({ play: { lyric, current, lyricList, currentdata } }) => ({ lyric, current, lyricList, currentdata })
  );
  const { lyric, current, lyricList, currentdata } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect( ()=> {
    let arr:string[] = [];
    if (lyric.lrc&&lyric.lrc.lyric) {
      let str = lyric.lrc.lyric;
      arr=str.split(/[\r\n]+/);
      arr.forEach((item:string,index:number)=>{
        if(!item){
          arr.splice(index,1);//删除空项
        }
      })
      let result:any[] = [];
      arr.forEach((str)=>{
        let item = str.split(']');
        result.push({time:item[0],des:item[1],num:turntoNum(item[0]),active:false})
      })
      dispatch(doLyricList(result));
    }
  },[lyric])
  useEffect(() => {
    let copylist = JSON.parse(JSON.stringify(lyricList));
    let current = copylist.filter((copy:any)=>(copy.num == currentdata.currentTime))[0];
    if (current) {
      copylist.forEach((copy:any)=>{
        if (copy.num == currentdata.currentTime) {
          copy.active = true;
        } else {
          copy.active = false;
        }
      });
      if (copylist.length>0) {
        dispatch(doLyricList(copylist));
      }
    }
  },[currentdata.currentTime])
  return (
    <div>
      <div className={style.container}>
        <div className={style.left}>
          <img src={current.al.picUrl} style={{width:'270px',height:'270px',borderRadius:'8px'}} />
        </div>
        <div className={style.right}>
          <div className={style.songName}>
            <p className={style.bigtext}>{current.name}</p>
            <p className={style.smalltext}>
              专辑：<span>{current.al.name}</span>
              歌手：<span>
              {current.ar&&current.ar.map((ar:any)=>{
                return (
                  <span key={ar.name}>{ar.name}</span>
                )
              })}
            </span>
            </p>
          </div>
          <div className={style.lyric}>
            {lyricList&&lyricList.map((lyr:any) => (
              <p className={lyr.active?style.lyractive:style.lyr} key={lyr.time+lyr.des}>{lyr.des}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}