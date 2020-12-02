import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export function isNotEmpty(str?: string | number): boolean {
  return str !== undefined && str !== null && !/^[\s\n]*$/g.test(String(str));
}
export function numtounit(number:any = 0) {
  let result = number;
  let unit = '';
  if (number>1000) {
    result = number/1000;
    unit = 'k';
  }
  if (number>10000) {
    result = number/10000;
    unit = 'w';
  }
  if (number>10000000) {
    result = number/10000000;
    unit = 'kw';
  }
  if (number>100000000) {
    result = number/100000000;
    unit = 'y';
  }
  result = parseInt(result);
  return result+unit;
}
export function splitarryaswewant(originarray:any[],splitnum:number) {
  let targetarray:any[] = [];
  let arrkey = -1;
  for (let i = 1;i<=originarray.length;i++) {
    if (i%splitnum === 1){
      arrkey++;
      targetarray[arrkey] = [];
    }
    targetarray[arrkey].push(originarray[i-1]);
  }
  return targetarray;
}
export function fixedTime(time: number | string) {
  let timer = new Date(time);
  let year = timer.getFullYear();
  let month: string = timer.getMonth()+1+'';
  month = Number(month)>9 ? month : '0' + month;
  let day = timer.getDate();
  return year + '-' + month + '-' + day;
}
export function getMinSec(time: number) {
  if (isNaN(time)) {
    return '00:00'
  }
  let min;let second;
  if (time>60) {
    min = Math.floor(time/60);
    second = time%60;
  } else {
    min = '0';
    second = time
  }
  min = min>9?min:'0'+min;
  second = second>9?second:'0'+second;
  return min + ':' + second;
}
export function turntoNum(str: string = '[00:11.48]') {
  str = str.split('[')[1];
  str = str.split(']')[0];
  let min = Number(str.split(':')[0]);
  let second = parseInt(str.split(':')[1]);
  let result = min * 60 + second;
  return result;
}

export function createData(list:any[]): any[] {
  return list.map(({subChannels , id , ...item}) => {
    if (subChannels && subChannels.length>0) {
      return { ...item, id, key:id, subChannels , children: createData(subChannels) }
    } else {
      return { ...item, key:id, id}
    }
  })
}

export function getAllChannelName(list: any[], result:any[]): void {
  list.forEach((item) => {
    result.push(item.channelName);
    if (item.subChannels && item.subChannels.length) {
      getAllChannelName(item.subChannels, result);
    }
  })
}

export class getChannelNameList{
  result:any[] = [];
  createData = (list:any[]) => {
    list.forEach((item) => {
      this.result.push(item.channelName);
      if (item.subChannels && item.subChannels.length) {
        this.createData(item.subChannels);
      }
    })
    return this.result
  }
}
