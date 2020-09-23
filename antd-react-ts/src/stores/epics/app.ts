import { Epic } from "redux-observable";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import { doFetchData } from "../actions";
import {
  RequestDataType,
  ResponseDataType,
  FailMessage
} from "../../types";

import { AxiosResponse } from "axios";
import { fetchData } from '../../servers';

const getData: Epic = (action$, state) =>
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


export default [getData];