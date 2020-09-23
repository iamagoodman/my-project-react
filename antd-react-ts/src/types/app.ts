import * as actions from '../stores/actions';  // 不太明白为什么 所有的动作又导入接口里
import { ActionType } from "typesafe-actions";

export type Action = ActionType<typeof actions>;
// 不太明白  这里是什么作用
export interface RequestDataType {
  name?: string;
  age?: number;
}

export interface ResponseDataType {
  data?: any;
}

export interface FailMessage {
  success?: boolean;
  message?: string;
}

export interface ChangeNumber {
  type: string;
  number: number;
}