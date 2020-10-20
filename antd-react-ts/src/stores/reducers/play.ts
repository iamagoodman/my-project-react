import { getType } from 'typesafe-actions';
import { Action } from '../../types';
import update from 'immutability-helper';
import { doPlayStatus, doCurrentSong, doSongUrl, doCurrentData, doProgress, doFetchLyric } from "../../stores/actions";

export interface playState {
  playStatus: boolean;
  current: any;
  currenturl: string;
  progressNum: number;
  currentdata: {
    duration: number;
    currentTime: number;
    playIndex: number;
  };
  lyric: {
    lrc: any;
    sgc?: boolean;
    sfy?: boolean;
    qfy?: boolean;
  }
}

const initialState: playState = {
  playStatus: false,
  current: {
    al:{}
  },
  currenturl: 'http://m8.music.126.net/20201013161614/f5fa0758705687ff5ac768d37245c317/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3355921739/46f4/f5d9/4418/50d29712324d57b466ed78cc8f7b1892.mp3',
  progressNum: 0,
  currentdata: {
    duration: 0,
    currentTime: 0,
    playIndex: 0
  },
  lyric: {
    lrc: {}
  }
}

export const playReducer = function (state: playState = initialState, action: Action) {
  switch (action.type) {
    case(getType(doPlayStatus)):
      return update(state,{
        playStatus: { $set: action.payload }
      });
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
        currentdata: {
          duration: { $set: action.payload.duration },
          currentTime: { $set: action.payload.currentTime },
          playIndex: { $set: action.payload.playIndex }
        }
      });
    case(getType(doProgress)):
      return update(state,{
        progressNum: { $set: action.payload }
      });
    case(getType(doFetchLyric.success)):
      return update(state,{
        lyric: {
          lrc: { $set: action.payload.lrc }
        }
      });
    case(getType(doFetchLyric.failure)):
      return state;
    default:
      return state;
  }
}