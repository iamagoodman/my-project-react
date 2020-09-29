import * as ActionType from '../../constans/actionType';
import {action, createAction, createAsyncAction} from "typesafe-actions";

export const doChangeHomeTab = createAction(
  ActionType.DO_CHANGE_HOME_TAB,
  action => (tab_key:string)=> action(tab_key)
)