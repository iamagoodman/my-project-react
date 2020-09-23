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