import * as ActionType from '../../constans/actionType';
import {createAsyncAction, createAction, action} from 'typesafe-actions';
import { PayloadData, CurrentData } from '../../types';

export const doPlayStatus = createAction(
  ActionType.FETCH_PLAY_STATUS,
  action => (status: boolean) => action(status)
)

export const doCurrentSong = createAction(
  ActionType.FETCH_CURRENT_SONG,
  action => (current: PayloadData<any>) => action(current)
)

export const doSongUrl = createAction(
  ActionType.FETCH_SONG_URL,
  action => (songurl: string) => action(songurl)
)

export const doCurrentData = createAction(
  ActionType.FETCH_CURRENT_DATA,
  action => (currentdata: CurrentData) => action(currentdata)
)

export const doProgress = createAction(
  ActionType.FETCH_PROGRESS,
  action => (progress: number) => action(progress)
)