import * as ActionType from "../../constans/actionType";
import { action, createAction, createAsyncAction} from "typesafe-actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage,
  RequestLogin,
  ResponseLogin
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
