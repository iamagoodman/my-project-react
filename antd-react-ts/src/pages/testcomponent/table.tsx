import React from "react";
import { useState, useEffect } from 'react';
import { Table, Pagination } from "antd";
import { data, testData } from './testData';
import { InsertRowAboveOutlined } from '@ant-design/icons';
import { createData, getAllChannelName, getChannelNameList } from '../../utils/util';
import findIndex from 'lodash/findIndex';
export default function () {
  const [list,setList] = useState(data);
  const [result,setResult] = useState([]);
  const [expandedRowKeys,setExpandedRowKeys] = useState(()=>{
    const data:any[] = [946,951];
    return data
  });
  useEffect(() => {
    let aa = createData(testData);
    getAllChannelName(testData,result);
    console.log(result);
    console.log(aa);
    setList(aa)
  },[])
  useEffect(() => {
    console.log(expandedRowKeys);
  },[expandedRowKeys])
  const handleClick = (record:any) => {
    console.log(record)
    const index = findIndex(expandedRowKeys, (i: number) => i === record.id);
    const in_ = findIndex(testData,(item:any) => item.id === 951);
    console.log(in_);
    console.log(index);
    if (index === -1) {
      setExpandedRowKeys([...expandedRowKeys,record.id])
    }else{
      let list = JSON.parse(JSON.stringify(expandedRowKeys));
      list.splice(index,1)
      setExpandedRowKeys(list)
    }
  }
  const renderExpandedRowRender = (record:any) => {
    return (
      <Table
        columns={columns1}
        dataSource={record.children}
        expandedRowKeys={expandedRowKeys}
        pagination={pagination1}
        onExpand={(expanded: boolean, record: any) => {
          handleClick(record);
        }}
        expandedRowRender={(record: any) => renderExpandedRowRender(record)}
      />
    )
  }
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
          <InsertRowAboveOutlined onClick={(e) => {addData(e,record)}} />
        </div>
      )
    }
  ];
  const pagination1 = {
    current:5,
    total: 10,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: false,
  }
  return (
    <div>
      {result.map((item:any)=>(
        <p key={item}>{item}</p>
      ))}
      <Table
        columns={columns1}
        dataSource={list}
        expandedRowKeys={expandedRowKeys}
        pagination={pagination1}
        onExpand={(expanded: boolean, record: any) => {
          handleClick(record);
        }}
        // expandedRowRender={(record: any) => renderExpandedRowRender(record)}
      />
    </div>
  )
}
