// 定义所有的动作类型
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export type FETCH_DATA_REQUEST = typeof FETCH_DATA_REQUEST;
export type FETCH_DATA_SUCCESS = typeof FETCH_DATA_SUCCESS;
export type FETCH_DATA_FAILURE = typeof FETCH_DATA_FAILURE;
//  请求接口的动作 有三种状态， request success fail

export const DO_CHANGE_NUMBER = 'DO_CHANGE_NUMBER';
export type DO_CHANGE_NUMBER = typeof DO_CHANGE_NUMBER;
//  同步操作，只需要一种状态

export const DO_CHANGE_NAME = 'DO_CHANGE_NAME';
export type DO_CHANGE_NAME = typeof DO_CHANGE_NAME;

export const DO_CHANGE_HOME_TAB = 'DO_CHANGE_HOME_TAB';
export type DO_CHANGE_HOME_TAB = typeof DO_CHANGE_HOME_TAB;

export const FETCH_BANNER_REQUEST = 'FETCH_BANNER_REQUEST';
export const FETCH_BANNER_SUCCESS = 'FETCH_BANNER_SUCCESS';
export const FETCH_BANNER_FAILURE = 'FETCH_BANNER_FAILURE';
export type FETCH_BANNER_REQUEST = typeof FETCH_BANNER_REQUEST;
export type FETCH_BANNER_SUCCESS = typeof FETCH_BANNER_SUCCESS;
export type FETCH_BANNER_FAILURE = typeof FETCH_BANNER_FAILURE;

export const FETCH_RECOMMEND_SONG_REQUEST = 'FETCH_RECOMMEND_SONG_REQUEST';
export const FETCH_RECOMMEND_SONG_SUCCESS = 'FETCH_RECOMMEND_SONG_SUCCESS';
export const FETCH_RECOMMEND_SONG_FAILURE = 'FETCH_RECOMMEND_SONG_FAILURE';
export type FETCH_RECOMMEND_SONG_REQUEST = typeof FETCH_RECOMMEND_SONG_REQUEST;
export type FETCH_RECOMMEND_SONG_SUCCESS = typeof FETCH_RECOMMEND_SONG_SUCCESS;
export type FETCH_RECOMMEND_SONG_FAILURE = typeof FETCH_RECOMMEND_SONG_FAILURE;


export const FETCH_NEW_SONG_REQUEST = 'FETCH_NEW_SONG_REQUEST';
export const FETCH_NEW_SONG_SUCCESS = 'FETCH_NEW_SONG_SUCCESS';
export const FETCH_NEW_SONG_FAILURE = 'FETCH_NEW_SONG_FAILURE';
export type FETCH_NEW_SONG_REQUEST = typeof FETCH_NEW_SONG_REQUEST;
export type FETCH_NEW_SONG_SUCCESS = typeof FETCH_NEW_SONG_SUCCESS;
export type FETCH_NEW_SONG_FAILURE = typeof FETCH_NEW_SONG_FAILURE;