import React from 'react';

class Cat extends React.Component<any, any>{
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{width:'10px',height:'10px',background:'#ddd',position:'absolute',left:mouse.x,top:mouse.y}}></div>
    )
  }
}
class Mouse extends React.Component<any, any>{
  constructor(props:any) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x:0, y:0 }
  }
  handleMouseMove(e: { clientX: any; clientY: any; }){
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return (
      <div style={{height:'100px',border:'1px solid #ddd'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default class MouseTracker extends React.Component<any, any>{
  render(){
    return (
      <div>
        <p>移动鼠标</p>
        <Mouse render={(mouse:{x:any,y:any})=>(
          <Cat mouse={mouse} />
        )} />
      </div>
    )
  }
}













// export default class MouseTracker extends React.Component<any, any>{
//   render() {
//     return (
//       <div>
//         <p>移动鼠标</p>
//         <Mouse render={(mouse: {x:any, y:any}) => (
//           <Cat mouse={mouse} />
//         )}/>
//       </div>
//     )
//   }
// }
