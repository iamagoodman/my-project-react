import * as ActionType from '../../constans/actionType';
import {action, createAction, createAsyncAction} from "typesafe-actions";
import {
  BannerResponse,
  RequestRecommend,
  RecommendSongResponse,
  NewSongResponse,
  FailMessage
} from "../../types";
import {Action} from "rxjs/internal/scheduler/Action";

export const doChangeHomeTab = createAction(
  ActionType.DO_CHANGE_HOME_TAB,
  action => (tab_key:string)=> action(tab_key)
)

export const doFetchBanner = createAsyncAction(
  ActionType.FETCH_BANNER_REQUEST,
  ActionType.FETCH_BANNER_SUCCESS,
  ActionType.FETCH_BANNER_FAILURE
)<undefined,BannerResponse,FailMessage>();

export const doFetchRecommendSong = createAsyncAction(
  ActionType.FETCH_RECOMMEND_SONG_REQUEST,
  ActionType.FETCH_RECOMMEND_SONG_SUCCESS,
  ActionType.FETCH_RECOMMEND_SONG_FAILURE
)<RequestRecommend,RecommendSongResponse,FailMessage>();

export const doFetchNewSong = createAsyncAction(
  ActionType.FETCH_NEW_SONG_REQUEST,
  ActionType.FETCH_NEW_SONG_SUCCESS,
  ActionType.FETCH_NEW_SONG_FAILURE
)<undefined,NewSongResponse,FailMessage>();