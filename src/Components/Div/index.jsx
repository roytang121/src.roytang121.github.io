import React, { Component } from 'react'

class Div extends Component {
  render () {
    return (
      <div {...this.props} style={{
        display: 'flex',
        flexDirection: this.props.col ? 'column' : 'row',
        ...this.props.style
      }}
      >{this.props.children}</div>
    )
  }
}

export default Div
