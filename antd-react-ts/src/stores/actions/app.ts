import * as ActionType from "../../constans/actionType";
import { createAction, createAsyncAction} from "typesafe-actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage
} from "../../types";

export const doChangeNumber = createAction(
  ActionType.DO_CHANGE_NUMBER,
  action => (type: string, number: number) => action({type, number})
);

export const doFetchData = createAsyncAction(
  ActionType.FETCH_DATA_REQUEST,
  ActionType.FETCH_DATA_SUCCESS,
  ActionType.FETCH_DATA_FAILURE
)<undefined, ResponseDataType, FailMessage>();
