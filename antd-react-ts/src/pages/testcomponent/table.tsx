import React from "react";
import { useState, useEffect } from 'react';
import { Table } from "antd";
import { data, testData } from './testData';
import { InsertRowAboveOutlined } from '@ant-design/icons';
import { createData } from '../../utils/util';
export default function () {
  const [list,setList] = useState(data);
  useEffect(() => {
    let aa = createData(testData);
    console.log(aa);
    setList(aa)
  },[])
  const addData = (e:any,record: any) => {
    console.log(e);
    console.log(record);
    console.log('add');
    // 拿到key，弹出新增弹框
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'key',
      width: '30%',
      key: 'action',
      render: (key: number,record:any) => (
        <div>
          {/*{*/}
          {/*  (key.toString()).length>3?null:*/}
          {/*    <InsertRowAboveOutlined onClick={(e) => {addData(e,record)}} />*/}
          {/*}*/}
          <InsertRowAboveOutlined onClick={(e) => {addData(e,record)}} />
        </div>
      )
    }
  ];
  const columns1 = [
    {
      title: 'ChannelName',
      dataIndex: 'channelName',
      key: 'channelName',
    },
    {
      title: 'ChannelNo',
      dataIndex: 'channelNo',
      key: 'channelNo',
      width: '12%',
    },
    {
      title: '',
      dataIndex: 'id',
      width: '30%',
      key: 'id',
      render: (key: number,record:any) => (
        <div>
          {/*{*/}
          {/*  (key.toString()).length>3?null:*/}
          {/*    <InsertRowAboveOutlined onClick={(e) => {addData(e,record)}} />*/}
          {/*}*/}
          <InsertRowAboveOutlined onClick={(e) => {addData(e,record)}} />
        </div>
      )
    }
  ];
  return (
    <Table
      columns={columns1}
      dataSource={list}
    />
  )
}
