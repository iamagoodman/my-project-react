import React from 'react';
import {Carousel} from 'antd';
import style from './index.module.less';
import {Card, IconFont} from '../../components';
import { imgList } from '../../constans/coreConstans';
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
  return (
    <div>
      <Carousel autoplay>
        <div className={style.img_container}>
          <img src={require('../../imgs/timg-1.jpeg')} alt='' />
        </div>
        <div className={style.img_container}>
          <img src={require('../../imgs/timg-2.jpeg')} alt='' />
        </div>
        <div className={style.img_container}>
          <img src={require('../../imgs/timg-3.jpg')} alt=""/>
        </div>
      </Carousel>
      <div className={style.content_container}>
        <div className={style.content_container_title}>
          <span>推荐歌单</span>
          <IconFont name='iconarrow-right-bold' />
        </div>
        {
          imgData.map((imgList,key) => (
            <div key={key} className={style.content_list}>
              {
                imgList.map((item:any,key:number) => (
                  <Card
                    key={item}
                    type='playcard'
                    src={item}
                    margin={key+1===imgList.length?{right:'0'}:{right: '20px'}}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}