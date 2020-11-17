import React,{ useEffect, useState } from 'react';
import style from './index.module.less';
import { Modal } from 'antd';
import ClassComponent from './components/classcomponent';
import FunctionComponent from './components/functioncomponent';
import MyContext from './components/context'

const data = [
  {name:'jack',sex:'F'},
  {name:'lili',sex:'M'}
]
export default class testpage extends React.Component{
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments:''
    }
  }
  componentDidMount(): void {
  }
  componentWillUnmount(): void {
  }

  handleChange(){
    this.setState({
      comments: ''
    })
  }
  render() {
    return (
      <div>
        <MyContext.Provider value={data}>
          <ClassComponent />
          <FunctionComponent />
        </MyContext.Provider>
      </div>
    )
  }
}
