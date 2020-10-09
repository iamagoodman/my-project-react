import { getType } from "typesafe-actions";
import update from 'immutability-helper';
import { Action } from "../../types";
import {
  doChangeHomeTab,
  doFetchBanner,
  doFetchRecommendSong,
  doFetchNewSong
} from "../actions";

export interface homeState {
  tab_key: string;
  banners: any[];
  recommendSongs: any[];
  newSongs: any[];
}
const initalState: homeState = {
  tab_key: 'recommend',
  banners: [{
    imageUrl: 'http://p1.music.126.net/TMYdOswHpFcpkTaq9R_W6A==/109951165350686612.jpg',
    targetId: 1481929839,
    titleColor: 'red',
    typeTitle: '独家'
  }],
  recommendSongs: [{
    id:3062667963,
    name:"好听到炸裂的古风歌曲合集",
    copywriter:"热门推荐",
    picUrl:"https://p2.music.126.net/xphtETT9CVE-IjRzGx20YA==/7969260279094350.jpg",
    playCount:274237
  }],
  newSongs: [{}]
}

export const homeReducer = function (state:homeState = initalState,action:Action) {
  switch (action.type) {
    case (getType(doChangeHomeTab)):
      return update(
        state,{
          tab_key: {$set: action.payload}
        }
      );
    case (getType(doFetchBanner.success)):
      return update(
        state, {
          banners: {$set: action.payload.banners}
        }
      );
    case (getType(doFetchBanner.failure)):
      return state;
    case (getType(doFetchRecommendSong.success)):
      return update(
        state,{
          recommendSongs: {$set: action.payload.result}
        }
      )
    case (getType(doFetchRecommendSong.failure)):
      return state;
    case (getType(doFetchNewSong.success)):
      return update(
        state,{
          newSongs: {$set: action.payload.result}
        }
      )
    case (getType(doFetchNewSong.failure)):
      return state;
    default:
      return state;
  }
}