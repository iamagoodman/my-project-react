import { getType } from "typesafe-actions";     // 判断动作类型
import update from 'immutability-helper';       // 用于更新不可变值state
import {
  doFetchData,
  doChangeName
} from "../actions";
import { Action } from "../../types";

export interface AppState {
  number: number;
  name: string;
  age: number;
  type: string;
  data: any;
}
const initialState: AppState = {
  number: 0,
  name: 'jack',
  age: 18,
  type: 'good',
  data: 'hello word'
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
    default:
      return state;
  }
}