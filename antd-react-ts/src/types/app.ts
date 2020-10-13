import * as actions from '../stores/actions';  // 不太明白为什么 所有的动作又导入接口里
import { ActionType } from "typesafe-actions";

export interface Headerbarprops {
  type: string;
}

export interface Iconprops {
  name: string;
  size?: number;
  color?: string;
  click?: any;
}

export interface songlistprops {
  data: any[];
  fun: any;
}

export interface CardInformation {
  playnum: number;
  desc: string;
}

export interface Cardprops {
  src: string;
  margin?: any;
  type: string;
  data?: CardInformation;
  click?: any;
}

export interface PlayNumProps {
  playNum?: number;
  desc?: string;
}

export interface RouteItem {
  key: string;
  path: string;
  component: any;
  auth?: boolean;
  children?: RouteItem[];
}

export type Action = ActionType<typeof actions>;
// 不太明白  这里是什么作用
export interface RequestDataType {
  name?: string;
  age?: number;
}

export interface ResponseDataType {
  data?: any;
}

export interface ResponseSuccess <T>{
  data:T
}

export interface NewSongResponse {
  code: number;
  category?: number;
  result: any[];
}

export interface RecommendSongResponse {
  code: number;
  hasTaste?: boolean;
  category?: number;
  result: any[];
}

export interface BannerResponse {
  code: number;
  banners: any[]
}

export interface FailMessage {
  error?: any;
  message?: any;
  reasonCode?: any;
}

export interface ChangeNumber {
  type: string;
  number: number;
}

export interface RequestLogin {
  phone: string;
  password: string;
}

export interface ResponseLogin {
  account?: any;
  bindings?: any[];
  code: any;
  cookie?: any;
  loginType?: any;
  profile: any;
  token?: any;
}

export interface PayloadData<T> {
  payload: T;
}

export interface RequestPlayList {
  id: string;
  s?: number
}

export interface ResponsePlayList {
  code: string;
  playlist: any;
  privileges?: any[];
  relatedVideos?: any;
  urls?: any;
}

export interface ResponseSongUrl {
  code?: string;
  data: object[];
}