import React from 'react';
import { IconFont } from '../../components';
import { songlistprops } from '../../types';
import style from './index.module.less';
export const SongList = function (props:songlistprops) {
  return (
    <div className={style.table}>
      <table>
        <tbody>
        <tr>
          <td style={{width:'75px'}}></td>
          <td style={{width:'290px'}}>音乐标题</td>
          <td style={{width:'150px'}}>歌手</td>
          <td style={{width:'180px'}}>专辑</td>
          <td style={{width:'47px'}}>时长</td>
        </tr>
        {
          props.data.map((item,index) => (
            <tr key={item.id} onClick={() => {props.fun({data:{id:item.id}})}}>
              <td>
                <span style={{paddingLeft:'5px',paddingRight:'5px'}}>{index+1>9?index+1:'0'+(index+1)}</span>
                <span><IconFont name='iconlike1' /></span>
                <span><IconFont name='iconDownload' /></span>
              </td>
              <td>
                <span>{item.name.length>18?item.name.substring(0,18)+'...':item.name}</span>
              </td>
              <td>
                {
                  item.ar.map((ar:any,num:number) => (
                    <span key={ar.id}>{ar.name}{num+1==item.ar.length?'':'/'}</span>
                  ))
                }
              </td>
              <td>
                <span>{item.al.name.length>12?item.al.name.substring(0,12)+'...':item.al.name}</span>
              </td>
              <td>
                <span>01:23</span>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}