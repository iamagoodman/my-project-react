import React,{ useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/reducers';
import { doLyricList } from '../../stores/actions';
import style from './index.module.less';
import {spawn} from "child_process";
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({ play: { lyric, current, lyricList, currentdata } }) => ({ lyric, current, lyricList, currentdata })
  );
  const { lyric, current, lyricList, currentdata } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect( ()=> {
    console.log(current);
    console.log(lyric.lrc.lyric);
    let arr:string[] = [];
    let str = lyric.lrc.lyric;
    if (str) {
      arr=str.split(/[\r\n]+/);
      arr.forEach((item:string,index:number)=>{
        if(!item){
          arr.splice(index,1);//删除空项
        }
      })
    }
    let result:any[] = [];
    arr.forEach((str)=>{
      let item = str.split(']');
      result.push({time:item[0],des:item[1]})
    })
    dispatch(doLyricList(result));
  },[lyric])
  useEffect(() => {
    console.log(currentdata.currentTime);
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
              <p className={style.lyr} key={lyr.time}>{lyr.des}</p>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}