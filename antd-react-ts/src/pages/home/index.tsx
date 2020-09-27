import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '@/stores/reducers';
// import { createFromIconfontCN } from '@ant-design/icons';
import { IconFont, Card } from "../../components";
import style from './index.module.less';
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {name, age}}) => ({name,age})
  );
  const { name, age } = useSelector(mapState);
  const dispatch = useDispatch();
  // const MyIcon = createFromIconfontCN({
  //   scriptUrl: '//at.alicdn.com/t/font_2100203_2yi3ujd54af.js', // 在 iconfont.cn 上生成
  // });
  const imgList = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=474784855fd67168850419972ba5c1d4&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fcbd75c5e2288be14ee3f21c289ca249f_hd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=958e84176bd7750e870db29939e0c965&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F04%2F20160704153331_LFxdR.thumb.700_0.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=c69025c04424b6fbc2f0ce5936b9d598&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F03%2F20180403101304_vLMHJ.thumb.700_0.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=07454ec480611a962cb46bd9fdee224b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2355b9e6ea0ca3b22232c4d3309ffc49ad06384b5c541-Q1jpvK_fw658',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=1fbfe05fbbe2cb98601e43262df5997b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F28%2F20160628030620_VMCdn.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=aab7de342cebc452b3fd5d9d8292407a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F05%2F20160305142222_2sfaL.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119558&di=2d4ff69b604e940ff78f8dcb6d16ee0b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11a52656c0835644071a9400a96f83ee945547d8f49d-q9680P_fw658',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119558&di=e448c3cdca7b5b0073a121c097cf6b77&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fde52baf789bd7e36cad16170cac02fc743ad7f4012e15a-2pEvDT_fw658',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119558&di=ba5953c2106ec2078b246f01287a9981&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7b3d9321a291e2cbf6560aa993c37204bf48467e60a2a-iDSvgr_fw658',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119557&di=aacddbedb28ed1b2dc1aa6c9f78d06bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F17%2F20180317200121_monhd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119557&di=445aacae45259b8cf9128d23ddab3bc1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F14%2F20161014030919_2sMPL.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119556&di=d42b498cd8e44bcd0a7af6ac6903d8e9&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F16%2F20170316233958_ivEN3.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119556&di=123be88ca40f4e24e24b51cbc8887c4e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F17%2F20180317200200_eksit.thumb.700_0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=1fbfe05fbbe2cb98601e43262df5997b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F28%2F20160628030620_VMCdn.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601208119559&di=aab7de342cebc452b3fd5d9d8292407a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F05%2F20160305142222_2sfaL.jpeg'
  ];
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
        <div className={style.content_list}>
          <div className={style.content_item}>
            <img src={require('../../imgs/card-1.jpeg')} alt=""/>
          </div>
          <div className={style.content_item}>
            <img src={require('../../imgs/card-2.jpeg')} alt=""/>
          </div>
          <div className={style.content_item}>
            <img src={require('../../imgs/card-3.jpeg')} alt=""/>
          </div>
          <div className={style.content_item}>
            <img src={require('../../imgs/card-4.jpeg')} alt=""/>
          </div>
          <div className={`${style.content_item} ${style.content_item_right}`}>
            <img src={require('../../imgs/card-5.jpeg')} alt=""/>
          </div>
        </div>
        {
          imgData.map((imgList,key) => (
            <div key={key} className={style.content_list}>
              {
                imgList.map((item:any,key:number) => (
                  <Card key={item} src={item} margin={key+1==imgList.length?{right:'0'}:{right: '20px'}} />
                ))
              }
            </div>
          ))
        }
      </div>
      <IconFont name='iconccedit' size={20} color='blue' />
      <i className='iconfont iconedit' style={{color:'red',fontSize:'25px'}}></i>
      <Link to='/about'>to about</Link>
      <p className={style.p}>my name is {name}</p>
      <div className={style.fulldiv}>fdskajklfsjaklfjsdal</div>
    </div>
  );
}