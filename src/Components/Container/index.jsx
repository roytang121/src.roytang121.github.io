import React, { Component } from 'react'

class Container extends Component {
  render () {
    return (
      <div {...this.props} style={{
        display: 'flex',
        flexDirection: this.props.col ? 'column' : 'row',
        flex: 1,
        ...this.props.style
      }}
      >{this.props.children}</div>
    )
  }
}

export default Container
