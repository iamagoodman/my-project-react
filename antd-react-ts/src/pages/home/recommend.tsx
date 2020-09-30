import React, {useEffect} from 'react';
import {Carousel} from 'antd';
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import style from './index.module.less';
import {Card, IconFont} from '../../components';
import {
  doFetchBanner,
  doFetchRecommendSong
} from "../../stores/actions";
import { imgList } from '../../constans/coreConstans';
import {RootState} from "@/stores/reducers";

let imgData:any[] = [];
let arrkey = -1;
for (let i = 1;i<=imgList.length;i++) {
  if (i%5 == 1){
    arrkey++;
    imgData[arrkey] = [];
  }
  imgData[arrkey].push(imgList[i-1]);
}
export default function () {
  const mapState = createSelector(
    (state: RootState) => state.home,
    ({ banners, recommendSongs }) => ({ banners, recommendSongs })
  );
  const { banners, recommendSongs } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(doFetchBanner.request());
    dispatch(doFetchRecommendSong.request());
  },[]);
  let imgData:any[] = [];
  let arrkey = -1;
  for (let i = 1;i<=recommendSongs.length;i++) {
    if (i%5 == 1){
      arrkey++;
      imgData[arrkey] = [];
    }
    imgData[arrkey].push(recommendSongs[i-1]);
  }
  return (
    <div>
      <Carousel autoplay>
        {
          banners.map((banner) => (
            <div key={banner.targetId} className={style.img_container}>
              <img src={banner.imageUrl} alt='' />
            </div>
          ))
        }
        {/*<div className={style.img_container}>*/}
        {/*  <img src={require('../../imgs/timg-1.jpeg')} alt='' />*/}
        {/*</div>*/}
        {/*<div className={style.img_container}>*/}
        {/*  <img src={require('../../imgs/timg-2.jpeg')} alt='' />*/}
        {/*</div>*/}
        {/*<div className={style.img_container}>*/}
        {/*  <img src={require('../../imgs/timg-3.jpg')} alt=""/>*/}
        {/*</div>*/}
      </Carousel>
      <div className={style.content_container}>
        <div className={style.content_container_title}>
          <span>推荐歌单</span>
          <IconFont name='iconarrow-right-bold' />
        </div>
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
                  />
                ))
              }
            </div>
          )
        }
        {/*{*/}
        {/*  imgData.map((imgList,key) => (*/}
        {/*    <div key={key} className={style.content_list}>*/}
        {/*      {*/}
        {/*        imgList.map((item:any,key:number) => (*/}
        {/*          <Card*/}
        {/*            key={item}*/}
        {/*            type='playcard'*/}
        {/*            src={item}*/}
        {/*            margin={key+1===imgList.length?{right:'0'}:{right: '20px'}}*/}
        {/*          />*/}
        {/*        ))*/}
        {/*      }*/}
        {/*    </div>*/}
        {/*  ))*/}
        {/*}*/}
      </div>
    </div>
  )
}