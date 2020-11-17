import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '@/stores/reducers';
import { Pagination } from 'antd';
import {doFetchPlayList, doFetchRecommendSong} from '../../stores/actions';
import {history, splitarryaswewant} from '../../utils/util';
import style from './index.module.less';
import { Card } from '../../components';
export default function () {
  const [curentpage,setCurrentPage] = useState(0);
  const mapState = createSelector(
    (state:RootState) => state.home,
    ({ recommendSongs }) => ({ recommendSongs })
  );
  const { recommendSongs } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(doFetchRecommendSong.request({limit:60}))
  },[])
  let imgData:any[] = splitarryaswewant(recommendSongs,5);
  return (<div>
    {
      imgData.map((songs) =>
        <div key={songs[0].id} className={style.content_list}>
          {
            songs.map((song:any,key:number) => (
              <Card
                key={song.id}
                type='playcard'
                src={song.picUrl}
                data={{playnum:song.playCount,desc:song.name}}
                margin={key+1===song.length?{right:'0'}:{right: '20px'}}
                click={()=>{dispatch(doFetchPlayList.request({id: song.id}));history.push('playlist')}}
              />
            ))
          }
        </div>
      )
    }
    <Pagination onChange={()=>{ console.log('page change') }} defaultCurrent={1} pageSize={40} total={200} />
  </div>)
}
