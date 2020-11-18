import React,{ useEffect, useState } from 'react';
import style from './index.module.less';
import { Modal } from 'antd';
import ClassComponent from './components/classcomponent';
import FunctionComponent from './components/functioncomponent';
import MyContext from './components/context';
import Resfinput from './components/refsinput';
import PortalComponent from './components/portalcomponent';
import Userefcomponent from './components/userefcomponent';
import MouseTracker from './components/mouseTracker';
import HocA from './components/hocA';
const data = [
  {name:'jack',sex:'F'},
  {name:'lili',sex:'M'}
]

function FunTestRef() {
  return (
    <div>hello test ref on function component</div>
  )
}

export default class testpage extends React.Component{
  private refcom: React.RefObject<HTMLDivElement>;
  private refinput: React.RefObject<HTMLInputElement>;
  private refinput2: React.RefObject<HTMLInputElement>;
  constructor(props:any) {
    super(props);
    this.refcom = React.createRef();
    this.refinput = React.createRef();
    this.refinput2 = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments:''
    }
  }
  componentDidMount(): void {
    console.log(this.refcom);
    console.log(this.refinput);
  }
  componentWillUnmount(): void {
  }

  handleChange(){
    this.setState({
      comments: ''
    })
  }

  handleClick() {
    console.log(this.refinput2);
  }
  render() {
    return (
      <div ref={this.refcom}>
        <input type="text" ref={this.refinput}/>
        <MyContext.Provider value={data}>
          <ClassComponent />
          <FunctionComponent />
        </MyContext.Provider>
        <Resfinput desc='哈哈哈哈哈哈哈哈' ref={this.refinput2} />
        <button onClick={()=>{this.handleClick()}}>show refinput2</button>
        <PortalComponent>
          <div>我要被挂在body节点下</div>
        </PortalComponent>
        <Userefcomponent />
        <MouseTracker />
        {/*<FunTestRef ref={this.refinput2} /> 函数组件上不能加ref，因为没有实例也不是DOM元素  */}
        <FunTestRef />
        <HocA />
      </div>
    )
  }
}
