import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '@/stores/reducers';
import style from './index.module.less';

export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({play:{ current }}) => ({ current })
  );
  const { current } = useSelector(mapState);
  console.log(current);
  return (
    <div className={style.cover}></div>
  )
}