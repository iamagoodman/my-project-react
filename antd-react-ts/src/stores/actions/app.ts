import * as ActionType from "../../constans/actionType";
import { action, createAction, createAsyncAction} from "typesafe-actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage,
  RequestLogin,
  ResponseLogin,
  RequestPlayList,
  ResponsePlayList,
  ResponseSongUrl
} from "../../types";

export const doChangeName = createAction(
  ActionType.DO_CHANGE_NAME,
  action => (name: string) => action(name)
);

export const doChangeNumber = createAction(
  ActionType.DO_CHANGE_NUMBER,
  action => (type: string, number: number) => action({type, number})
);

export const doFetchData = createAsyncAction(
  ActionType.FETCH_DATA_REQUEST,
  ActionType.FETCH_DATA_SUCCESS,
  ActionType.FETCH_DATA_FAILURE
)<undefined, ResponseDataType, FailMessage>();

export const doLoginVisiable = createAction(
  ActionType.DO_LOGIN_VISIABLE,
  action => (visiable: boolean) => action(visiable)
)

export const doLogin = createAsyncAction(
  ActionType.FETCH_LOGIN_REQUEST,
  ActionType.FETCH_LOGIN_SUCCESS,
  ActionType.FETCH_LOGIN_FAILURE
)<RequestLogin, ResponseLogin, FailMessage>();

export const doFetchPlayList = createAsyncAction(
  ActionType.FETCH_PLAYLIST_REQUEST,
  ActionType.FETCH_PLAYLIST_SUCCESS,
  ActionType.FETCH_PLAYLIST_FAILURE
)<RequestPlayList, ResponsePlayList, FailMessage>();

export const doFetchSongUrl = createAsyncAction(
  ActionType.FETCH_SONGURL_REQUEST,
  ActionType.FETCH_SONGURL_SUCCESS,
  ActionType.FETCH_SONGURL_FAILURE
)<RequestPlayList, ResponseSongUrl, FailMessage>();
