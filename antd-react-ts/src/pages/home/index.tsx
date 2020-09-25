import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "@/stores/reducers";
import { doChangeName } from "../../stores/actions";
import style from './index.module.less';
import './index.less';
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {console.log('to about')}}
      >
        to about
      </Button>
      <Link to='/about'>to about</Link>
      <p className={style.p}>my name is {name}</p>
      <Button
        className={style.resetbtn}
        type='primary'
        onClick={()=>{dispatch(doChangeName('kakakaka'))}}
      >
        change name</Button>
    </div>
  );
}