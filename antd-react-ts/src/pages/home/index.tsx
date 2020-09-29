import React from 'react';
import { Carousel } from 'antd';
// import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '@/stores/reducers';
import { IconFont, Card } from "../../components";
import Song from './song';
import Radio from './radio';
import Ranking from './ranking';
import Singer from './singer';
import New from './new'
import style from './index.module.less';
import { imgList } from "../../constans/coreConstans";

export default function () {
  const mapState = createSelector(
    (state: RootState) => state.home,
    ({tab_key}) => ({tab_key})
  );
  const { tab_key } = useSelector(mapState);
  const dispatch = useDispatch();

  let imgData:any[] = [];
  let arrkey = -1;
  for (let i = 1;i<=imgList.length;i++) {
    if (i%5 == 1){
      arrkey++;
      imgData[arrkey] = [];
    }
    imgData[arrkey].push(imgList[i-1]);
  }
  return (
    <div>
      {
        tab_key === 'song' ? <Song /> : tab_key === 'radio' ? <Radio /> : tab_key === 'ranking' ? <Ranking /> :
          tab_key === 'singer' ? <Singer /> : <New />
      }
    </div>
  );
}