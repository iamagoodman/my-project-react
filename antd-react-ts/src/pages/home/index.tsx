import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '@/stores/reducers';
import { doChangeName } from '../../stores/actions';
import { createFromIconfontCN } from '@ant-design/icons';
import { IconFont } from "../../components";
import style from './index.module.less';
import './index.less';
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2100203_2yi3ujd54af.js', // 在 iconfont.cn 上生成
  });
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {console.log('to about')}}
      >
        to about
      </Button>
      <IconFont name='iconccedit' size={20} color='blue' />
      <i className='iconfont iconedit' style={{color:'red',fontSize:'25px'}}></i>
      <MyIcon type='icon-chengzi' size={37} />
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