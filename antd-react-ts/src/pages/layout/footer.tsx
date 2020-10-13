import React, { useRef, useEffect } from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { IconFont } from '../../components';
import style from "./index.module.less";
import { RootState } from '../../stores/reducers';

const { Footer } = Layout;

export default function () {
  const mpState = createSelector(
    (state: RootState) => state,
    ({ play: { current , playStatus, currenturl, currentdata } }) => ({ current, playStatus, currenturl, currentdata })
  );
  const { current, playStatus, currenturl, currentdata } = useSelector(mpState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(current);
    console.log('current');
  },[current])
  const audioPlay: React.RefObject<any> = useRef(null);
  function showref() {
    const au = audioPlay.current;
    if (au.paused) {
      au.play();
    } else {
      au.pause();
    }
  }
  function showproess() {
    console.log(audioPlay);
  }
  return (
    <Footer className={`footer ${style.mp_layout_footer}`}>
      <Row>
        <Col span={8}>
          <div style={{overflow:'hidden'}}>
            <div style={{float:'left',width:'42px'}}>
              <img src={current.al.picUrl} style={{width:'42px',height:'42px',borderRadius:'3px'}} />
            </div>
            <div style={{marginLeft:'42px'}}>
              <div style={{lineHeight:'20px',marginTop:'10px',overflow:'hidden',textOverflow:'hidden',whiteSpace:'nowrap'}}>{current.name}</div>
              <div style={{lineHeight:'20px'}}>
                <span></span>/<span></span>
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
              <IconFont name='iconarrow-left-filling' color='#e31e10' size={25} />
              <IconFont name='iconzanting' color='#e31e10' size={34} click={showref} />
              <IconFont name='iconarrow-right-filling' color='#e31e10' size={25} click={showproess} />
            </span>
            <span>
              <IconFont name='icondelete_icon' size={16} />
            </span>
          </div>
        </Col>
        <Col span={8}>
          <audio
            autoPlay={true}
            ref={audioPlay}
            key={currenturl}
            controls={true}
            src={currenturl}
          ></audio>
        </Col>
      </Row>
    </Footer>
  );
}