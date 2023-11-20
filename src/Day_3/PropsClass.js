import React, { Component } from 'react'

export default class PropsClass extends Component {
    state={name:"SKCET",place:"CBT"}
  render() {
    return (
      <div>
        <h1>i am studying at {this.state.name} place {this.state.place}</h1>
        <button onClick={()=>{this.setState({name:"Atri"})}}>Click me</button>
      </div>
    )
  }
}
