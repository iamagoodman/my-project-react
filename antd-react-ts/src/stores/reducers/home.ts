import { getType } from "typesafe-actions";
import update from 'immutability-helper';
import { Action } from "../../types";
import {
  doChangeHomeTab
} from "../actions";

export interface homeState {
  tab_key: string
}
const initalState: homeState = {
  tab_key: 'song'
}

export const homeReducer = function (state:homeState = initalState,action:Action) {
  switch (action.type) {
    case (getType(doChangeHomeTab)):
      return update(
        state,{
          tab_key: {$set: action.payload}
        }
      );
    default:
      return state;
  }
}