import * as ActionType from '../../constans/actionType';
import {action, createAction, createAsyncAction} from "typesafe-actions";
import {
  BannerResponse,
  FailMessage
} from "../../types";

export const doChangeHomeTab = createAction(
  ActionType.DO_CHANGE_HOME_TAB,
  action => (tab_key:string)=> action(tab_key)
)

export const doFetchBanner = createAsyncAction(
  ActionType.FETCH_BANNER_REQUEST,
  ActionType.FETCH_BANNER_SUCCESS,
  ActionType.FETCH_BANNER_FAILURE
)<undefined,BannerResponse,FailMessage>();