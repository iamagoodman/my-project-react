import { Epic } from "redux-observable";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import { doFetchLyric, doFetchSongUrl } from "../actions";
import {
  RequestLyric,
  ResponseLyric,
  PayloadData,
} from "../../types";

import { AxiosResponse } from "axios";
import { fetchLyric } from '../../servers';

const Lyric: Epic = (action$,state$) =>
  action$.pipe(
    filter(isActionOf(doFetchLyric.request)),
    mergeMap(({payload}: PayloadData<RequestLyric>) => {
      return fetchLyric(payload).pipe(
        map(({data:{lrc,tlyric}}: AxiosResponse<ResponseLyric>) => {
          return doFetchLyric.success({lrc,tlyric});
        }),
        catchError((fail: any) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchLyric.failure(fail));
        })
      )
    })
  )

export default [Lyric];