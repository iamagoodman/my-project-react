import { Epic } from "redux-observable";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import { doFetchData, doLogin } from "../actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage,
  RequestLogin,
  ResponseLogin,
  PayloadData
} from "../../types";

import { AxiosResponse } from "axios";
import { fetchData, fetchLogin } from '../../servers';

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

const login: Epic = (actions$, state$) =>
  actions$.pipe(
    filter(isActionOf(doLogin.request)),
    mergeMap(({payload}: PayloadData<RequestLogin>) => {
      return fetchLogin(payload).pipe(
        map(({data:{code,profile}}: AxiosResponse<ResponseLogin>)=>{
          console.log('login success');
          return doLogin.success({code,profile});
        }),
        catchError((fail: FailMessage)=>{
          console.log('login fail');
          message.warning(fail.message || 'request fail');
          return of(doLogin.failure(fail));
        })
      )
    })
  )


export default [getData,login];