import React, { Component } from 'react'

export default class ComponentDidMount extends Component {

start={color1:"Yellow"}
shouldComponentUpdate()
{
    return true;
}
getSnapshotBeforeUpdate(preProps,preState)
{
    document.getElementById("i").innerHTML="Previous Value "=preState.color;
}
ccomponentDidMount()
{
    setTimeout=(()=>{this.setState({color:"Blue"})},3000)
}

  render() {
    return (
      <div>
         <h1>{this.state.color1}</h1>
         <h2 id="i"></h2>
      </div>
    )
  }
}
