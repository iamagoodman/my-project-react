import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, filter, map, catchError } from 'rxjs/operators'
import { isActionOf } from "typesafe-actions";
import { message } from "antd";
import {
  doFetchBanner,
  doFetchRecommendSong,
  doFetchNewSong
} from "../actions";
import {
  ResponseSuccess,
  BannerResponse,
  RecommendSongResponse,
  NewSongResponse,
  FailMessage
} from "../../types";
import {
  fetchBanner,
  fetchRecommendSong,
  fetchNewSong
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

const fetchRecommendSongs: Epic = (actions$,state$) =>
  actions$.pipe(
    filter(isActionOf(doFetchRecommendSong.request)),
    mergeMap(({payload}) => {
      return fetchRecommendSong(payload).pipe(
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

const fetchNewSongs: Epic = (actions$,state$) =>
  actions$.pipe(
    filter(isActionOf(doFetchNewSong.request)),
    mergeMap(() => {
      return fetchNewSong().pipe(
        map(({data:{code,result,category}}: AxiosResponse<NewSongResponse>) => {
          return doFetchNewSong.success({result,code,category});
        }),
        catchError((fail: FailMessage) => {
          message.warning(fail.message || 'request fail');
          return of(doFetchNewSong.failure(fail));
        })
      )
    })
  )

export default [fetchBanners, fetchRecommendSongs, fetchNewSongs];
