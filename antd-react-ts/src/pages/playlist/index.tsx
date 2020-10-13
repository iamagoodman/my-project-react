import React,{ useEffect } from 'react';
import { createSelector } from 'reselect';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/stores/reducers';
import { Row, Col, Tabs } from 'antd';
import { IconFont, SongList } from '../../components';
import style from './index.module.less';
import { playList as play } from '../../constans/coreConstans';
import { fixedTime } from '../../utils/util';
import { numtounit } from '../../utils/util';
import { fetchbanner, fetchsongurl } from "../../servers/specialservers";
import { doLoginVisiable } from "../../stores/actions";

const { TabPane } = Tabs;
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: {playList, songUrl}}) => ({playList, songUrl})
  );
  const { playList, songUrl } = useSelector(mapState);
  const dispatch = useDispatch();
  let reqbanner = async () => {
    let data = await fetchbanner();
    console.log(data);
    if (data) {
      console.log('回调');
      dispatch(doLoginVisiable(true));
    }
  }
  let reqsongurl = async (req:any) => {
    let data = await fetchsongurl(req);
    console.log(data);
  }

  return (
    <div className={style.playlist}>
      <div className={style.header_container}>
        <div className={style.header_left}>
          <img src={play.coverImgUrl} style={{width: '100%', borderRadius: '5px'}} />
        </div>
        <div className={`${style.title_container} ${style.header_right}`}>
          <div className={style.bigmargin}>
            <IconFont name='icongedan' size={20} color='#e31e10'/>
            <span className='main_title'>
              国漫崛起的乐章
            </span>
          </div>
          <div className={`${style.avatar_container} ${style.bigmargin}`}>
            <img src={play.creator.avatarUrl} />
            <span className='active_color'>{play.creator.nickname}</span>
            <span>{fixedTime(play.createTime)}创建</span>
          </div>
          <div className={`${style.btn_container} ${style.bigmargin}`}>
            <span className={`${style.btn_item} ${style.btn_item_active}`}>
              <span className={style.marginboth}>
                <IconFont name='iconvideo' />
              </span>
              <span>播放全部</span>
            </span>
            <span className={style.btn_item}>
              <span className={style.marginboth}>
                <IconFont name='iconshoucang1' />
              </span>
              <span>收藏({numtounit(play.subscribedCount)})</span>
            </span>
            <span className={style.btn_item}>
              <span className={style.marginboth}>
                <IconFont name='iconfenxiang1' />
              </span>
              <span>分享({numtounit(play.shareCount)})</span>
            </span>
            <span className={style.btn_item}>
              <span className={style.marginboth}>
                <IconFont name='iconxiazai1' />
              </span>
              <span>下载全部</span>
            </span>
          </div>
          <div className={style.smallmargin}>
            <span>标&nbsp;&nbsp;&nbsp;&nbsp;签：</span>
            {play.tags.map((tag,index) => (
              <span key={tag}>
                <span className={`${style.tags} ${style.marginboth}`}>
                  {tag}
                </span>
                {index==play.tags.length-1?'':'/'}
              </span>
            ))}
          </div>
          <div className={style.smallmargin}>
            <span style={{marginRight:'10px'}}>歌曲数：{play.trackIds.length}</span>
            <span>播放数：{play.playCount}</span>
          </div>
          <div className={style.smallmargin}>
            <span>简&nbsp;&nbsp;&nbsp;&nbsp;介：{play.description.substring(0,10)}......</span>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey='1' onChange={(key) => {console.log(key)}}>
          <TabPane key='1' tab='歌曲列表'>
            <SongList data={play.tracks} fun={reqsongurl} />
          </TabPane>
          <TabPane key='2' tab={`评论${play.commentCount}`}>
            评论
          </TabPane>
          <TabPane key='3' tab='收藏者'>
            收藏者
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}