import { getType } from "typesafe-actions";
import update from 'immutability-helper';
import { Action } from "../../types";
import {
  doChangeHomeTab,
  doFetchBanner
} from "../actions";

export interface homeState {
  tab_key: string;
  banners: any[];
}
const initalState: homeState = {
  tab_key: 'song',
  banners:[{
    imageUrl: 'http://p1.music.126.net/TMYdOswHpFcpkTaq9R_W6A==/109951165350686612.jpg',
    targetId: 1481929839,
    titleColor: 'red',
    typeTitle: '独家',
  }]
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
    default:
      return state;
  }
}