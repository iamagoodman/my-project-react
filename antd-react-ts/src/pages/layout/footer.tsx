import React, { useRef, useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col, Progress } from 'antd';
import { history } from '../../utils/util';
import { IconFont } from '../../components';
import style from "./index.module.less";
import './index.less';
import { RootState } from '../../stores/reducers';
import {doCurrentData, doCurrentSong, doFetchLyric, doPlayStatus, doProgress, doSongUrl} from '../../stores/actions';
import { getMinSec } from '../../utils/util';
import {fetchlyric, fetchsongurl} from "../../servers/specialservers";
const { Footer } = Layout;

export default function () {
  // const [shouldInter,setShouldInter] = useState(true);
  const mpState = createSelector(
    (state: RootState) => state,
    ({ play: { current , playStatus, currenturl, currentdata, progressNum }, app: { playList } }) => ({ current, playStatus, currenturl, currentdata, progressNum, playList })
  );
  const { current, playStatus, currenturl, currentdata, progressNum, playList } = useSelector(mpState);
  const dispatch = useDispatch();
  const audioPlay: React.RefObject<any> = useRef(null);
  function showref() {
    const au = audioPlay.current;
    if (au.paused) {
      au.play();
      dispatch(doPlayStatus(true));
    } else {
      au.pause();
      dispatch(doPlayStatus(false));
    }
  }
  let reqsongurl = async (req:any,index:number) => {
    dispatch(doCurrentSong(req));
    let data = await fetchsongurl({data:{id:req.id}});
    // let lyric = await fetchlyric({data:{id:req.id}});
    // console.log(lyric);
    dispatch(doFetchLyric.request({id:req.id}))
    dispatch(doSongUrl(data.data.data[0].url));
    dispatch(doPlayStatus(true));
    dispatch(doCurrentData({currentTime:currentdata.currentTime,duration:currentdata.duration,playIndex:index}));
  }
  function prevSong() {
    if (currentdata.playIndex == 0) {
      return
    }
    reqsongurl(playList.tracks[currentdata.playIndex-1],currentdata.playIndex-1);
  }
  function nextSong() {
    if (currentdata.playIndex + 1 == playList.tracks.length ) {
      return
    }
    reqsongurl(playList.tracks[currentdata.playIndex+1],currentdata.playIndex+1);
  }
  function setCurrentTime() {
    if (audioPlay.current && !isNaN(audioPlay.current.duration)) {
      // duration 总时长  currentTime 当前时间
      let duration = parseInt(audioPlay.current.duration);
      let currentTime = parseInt(audioPlay.current.currentTime);
      console.log(audioPlay.current.currentTime);
      dispatch(doCurrentData(Object.assign(currentdata,{duration: duration, currentTime: currentTime})));
      let progress = (currentTime/duration)*100;
      dispatch(doProgress(progress));
    }
  }
  function loadedMetadata() {
    setCurrentTime();
  }
  function timeupdate() {
    setCurrentTime();
  }
  function ended() {
    console.log('on ended');
    dispatch(doProgress(0));
    dispatch(doPlayStatus(false));
    if (true) { // 自动连播放
      nextSong();
    }
  }
  function tosong() {
    history.push('song');
  }
  return (
    <Footer className={`footer ${style.mp_layout_footer}`}>
      <Progress percent={progressNum} />
      <Row>
        <Col span={8}>
          <div style={{overflow:'hidden'}}>
            <div style={{float:'left',width:'42px'}} onClick={tosong}>
              <img src={current.al.picUrl} style={{width:'42px',height:'42px',borderRadius:'3px'}} />
            </div>
            <div style={{marginLeft:'42px'}}>
              <div style={{lineHeight:'20px',marginTop:'10px',overflow:'hidden',textOverflow:'hidden',whiteSpace:'nowrap',paddingLeft:'10px',textAlign:'left'}}>{current.name}</div>
              <div style={{lineHeight:'20px',paddingLeft:'10px',fontSize:'13px',textAlign:'left'}}>
                <span>{getMinSec(currentdata.currentTime)}</span>/<span>{getMinSec(currentdata.duration)}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className={style.icon_list}>
            <span>
              <IconFont name='iconheart' size={20} />
            </span>
            <span className={style.play}>
              <IconFont name='iconarrow-left-filling' color='#e31e10' size={25} click={prevSong} />
              {
                playStatus?<IconFont name='iconzanting' color='#e31e10' size={34} click={showref} />:
                  <IconFont name='iconplay' color='#e31e10' size={34} click={showref} />
              }
              <IconFont name='iconarrow-right-filling' color='#e31e10' size={25} click={nextSong} />
            </span>
            <span>
              <IconFont name='icondelete_icon' size={16} />
            </span>
          </div>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
      <div style={{opacity:0,height:'0'}}>
        <audio
          autoPlay={true}
          ref={audioPlay}
          key={currenturl}
          controls={true}
          src={currenturl}
          onLoadedMetadata={loadedMetadata}
          onTimeUpdate={timeupdate}
          onEnded={ended}
        ></audio>
      </div>
    </Footer>
  );
}