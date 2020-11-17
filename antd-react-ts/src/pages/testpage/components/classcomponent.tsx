import React from 'react';

export default class extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      count:0
    }
  }
  componentDidMount(): void {
    console.log('didmount',this.state.count);
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    console.log('didupdate',this.state.count);
  }

  render() {
    const count = this.state.count;
    return (
      <div>
        <p>click {count} times</p>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>add count</button>
      </div>
    )
  }
}
