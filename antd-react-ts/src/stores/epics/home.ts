import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, filter, map, catchError } from 'rxjs/operators'
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import { doFetchBanner, doFetchRecommendSong } from "../actions";
import {
  ResponseSuccess,
  BannerResponse,
  RecommendSongResponse,
  FailMessage
} from "../../types";
import {
  fetchBanner,
  fetchRecommendSong
} from "../../servers";
import {AxiosResponse} from "axios";

const fetchBanners: Epic = (actions$,state$) =>
  actions$.pipe(
    filter(isActionOf(doFetchBanner.request)),
    mergeMap(() => {
      return fetchBanner().pipe(
        map(({data:{code, banners}}: AxiosResponse<BannerResponse>)=>{
          return doFetchBanner.success({code,banners})
        }),
        catchError((fail: FailMessage) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchBanner.failure(fail));
        })
      )
    })
  )

const fetRecommendSong: Epic= (actions$,state$) =>
  actions$.pipe(
    filter(isActionOf(doFetchRecommendSong.request)),
    mergeMap(() => {
      return fetchRecommendSong().pipe(
        map(({data:{code,result}}: AxiosResponse<RecommendSongResponse>) => {
          return doFetchRecommendSong.success({code,result})
        }),
        catchError((fail: FailMessage) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchRecommendSong.failure(fail));
        })
      )
    })
  )

export default [fetchBanners,fetRecommendSong];
