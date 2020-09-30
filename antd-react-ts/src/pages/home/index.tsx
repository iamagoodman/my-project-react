import React, {useEffect} from 'react';
import { Carousel } from 'antd';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '@/stores/reducers';
import Recommend from './recommend';
import Song from './song';
import Radio from './radio';
import Ranking from './ranking';
import Singer from './singer';
import New from './new';
import { doFetchBanner } from "../../stores/actions";
import style from './index.module.less';
import { imgList } from "../../constans/coreConstans";

export default function () {
  const mapState = createSelector(
    (state: RootState) => state.home,
    ({tab_key, banners}) => ({tab_key, banners})
  );
  const { tab_key, banners } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(doFetchBanner.request());
    // console.log(banners);
  },[])
  return (
    <div>
      {
        tab_key === 'recommend' ? <Recommend/> : tab_key === 'song' ? <Song /> : tab_key === 'radio' ? <Radio /> : tab_key === 'ranking' ? <Ranking /> :
          tab_key === 'singer' ? <Singer /> : <New />
      }
    </div>
  );
}