import { Epic } from "redux-observable";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import { doFetchData, doLogin, doFetchPlayList, doFetchSongUrl } from "../actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage,
  RequestLogin,
  ResponseLogin,
  PayloadData,
  RequestPlayList,
  ResponsePlayList,
  ResponseSongUrl
} from "../../types";

import { AxiosResponse } from "axios";
import { fetchData, fetchLogin, fetchPlayList, fetchSongUrl } from '../../servers';
const getData: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(doFetchData.request)),
    mergeMap(() => {
      // const { name, age } = payload;
      return fetchData().pipe(
        map((data: ResponseDataType)=>{
          doFetchData.success({...data})
        }),
        catchError((fail: FailMessage) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchData.failure(fail));
        })
      )
    })
  )

const login: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(doLogin.request)),
    mergeMap(({ payload }: PayloadData<RequestLogin>) => {
      return fetchLogin(payload).pipe(
        // dao di gai zm gao
        map(({data:{account,bindings,code,cookie,loginType,profile,token}}: AxiosResponse<ResponseLogin>) => {
          return doLogin.success({account,bindings,code,cookie,loginType,profile,token});
        }),
        catchError((fail: any) => {
          message.warning(fail.message || 'request fail');
          return of(doLogin.failure(fail));
        })
      )
    })
  )

const playList: Epic = (action$,state$) =>
  action$.pipe(
    filter(isActionOf(doFetchPlayList.request)),
    mergeMap(({payload}: PayloadData<RequestPlayList>) => {
      return fetchPlayList(payload).pipe(
        map(({data:{code,playlist}}: AxiosResponse<ResponsePlayList>) => {
          return doFetchPlayList.success({code,playlist});
        }),
        catchError((fail: any) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchPlayList.failure(fail));
        })
      )
    })
  )

const songUrl: Epic = (action$,state$) =>
  action$.pipe(
    filter(isActionOf(doFetchSongUrl.request)),
    mergeMap(({payload}: PayloadData<RequestPlayList>) => {
      return fetchSongUrl(payload).pipe(
        map(({data:{code,data}}: AxiosResponse<ResponseSongUrl>) => {
          return doFetchSongUrl.success({code, data});
        }),
        catchError((fail: any) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchSongUrl.failure(fail));
        })
      )
    })
  )

export default [getData,login,playList,songUrl];