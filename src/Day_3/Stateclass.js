import React, { Component } from 'react'

export default class Stateclass extends Component {
  state= { count:0  };

  ap=()=> {  this.setState({count:this.state.count+1})  }
  render() {
    return (
      <div>
        <p>count:{this.state.count}</p> 
        <button onClick={this.ap}> Increment</button>
      </div>
    )
  }
}
