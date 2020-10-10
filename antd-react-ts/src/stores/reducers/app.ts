import { getType } from "typesafe-actions";     // 判断动作类型
import update from 'immutability-helper';       // 用于更新不可变值state
import {
  doFetchData,
  doChangeName,
  doLoginVisiable,
  doLogin,
  doFetchPlayList,
  doFetchSongUrl
} from "../actions";
import { Action } from "../../types";

export interface AppState {
  number: number;
  name: string;
  age: number;
  type: string;
  data: any;
  headerbar: string;
  loginVisiable: boolean;
  phone: string;
  password: string;
  userInfo: any;
  playList: any[];
  songUrl: any[];
}
const initialState: AppState = {
  number: 0,
  name: 'jack',
  age: 18,
  type: 'good',
  data: 'hello word',
  headerbar: 'home',
  loginVisiable: false,
  phone: '13929244742',
  password: 'qwer1234',
  userInfo: {},
  playList: [],
  songUrl: []
}

export const appReducer = (state: AppState = initialState,action: Action) => {
  switch (action.type) {
    case getType(doChangeName):
      return update(state,{
        name: {$set: action.payload},
      });
    case getType(doFetchData.success):
      return update(state,{
        data: {$set: action.payload}
      })
    case getType(doFetchData.failure):
      return update(state,{
        data: {$set: 'hello word'}
      });
    case getType(doLoginVisiable):
      return update(state, {
        loginVisiable: { $set: action.payload }
      });
    case getType(doLogin.success):
      return update(state,{
        userInfo: { $set: action.payload }
      });
    case getType(doLogin.failure):
      return update(state,{
        userInfo: { $set: {} }
      });
    case getType(doFetchPlayList.success):
      return update(state,{
        playList: { $set: action.payload.playlist }
      });
    case getType(doFetchPlayList.failure):
      return state;
    case getType(doFetchSongUrl.success):
      return update(state,{
        songUrl: { $set: action.payload.data }
      });
    case getType(doFetchSongUrl.failure):
      return state;
    default:
      return state;
  }
}