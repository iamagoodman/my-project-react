import React from "react";
import { connect } from 'react-redux';
function widthInput(WrappedComponent:any) {
  return class extends React.Component {
    constructor(props:any) {
      super(props)
      this.state = {
        value:''
      }
      this.onInputEvent = this.onInputEvent.bind(this)
    }

    onInputEvent(event:any) {
      console.log(event.target.value);
      this.setState({
        value: event.target.value
      })
    }
    render() {
      const state = this.state;
      const newProps = {
        // @ts-ignore
        value: state.value,
        onChange: this.onInputEvent
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}

class InputComponent extends React.Component {
  render() {
    return <input type="text" {...this.props} />
  }
}

export default widthInput(InputComponent)
