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
    if (i%splitnum == 1){
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