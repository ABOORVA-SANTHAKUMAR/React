import React from 'react'

export default function DefaultProps(props) {
  return (
    <div>
      <h1>my name is {props.name} and i am studying at {props.college}</h1>
    </div>
  )
}
DefaultProps.defaultProps={college:"SKCET"}
