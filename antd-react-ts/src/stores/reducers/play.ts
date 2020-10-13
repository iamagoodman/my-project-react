import { getType } from 'typesafe-actions';
import { Action } from '../../types';
import update from 'immutability-helper';
import { doPlayStatus, doCurrentSong, doSongUrl, doCurrentData } from "../../stores/actions";

export interface playState {
  playStatus: boolean;
  current: any;
  playList: any[];
  currenturl: string;
  currentdata: any;
}

const initialState: playState = {
  playStatus: false,
  current: {
    al:{}
  },
  playList: [],
  currenturl: 'http://m8.music.126.net/20201013161614/f5fa0758705687ff5ac768d37245c317/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3355921739/46f4/f5d9/4418/50d29712324d57b466ed78cc8f7b1892.mp3',
  currentdata: {}
}

export const playReducer = function (state: playState = initialState, action: Action) {
  switch (action.type) {
    case(getType(doCurrentSong)):
      return update(state,{
        current: { $set: action.payload }
      })
    case(getType(doSongUrl)):
      return update(state,{
        currenturl: { $set: action.payload }
      });
    case(getType(doCurrentData)):
      return update(state,{
        currentdata: { $set: action.payload }
      });
    default:
      return state;
  }
}