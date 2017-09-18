import React from 'react'
import Div from '../Div'

class Footer extends React.Component {
  render () {
    return (
      <Div col style={footerStyle} className='container'>
        <span>© Roy Tang All rights reserved.</span>
      </Div>
    )
  }
}

const footerStyle = {
  marginTop: 120,
  alignItems: 'flex-end',
  fontWeight: 200,
  fontSize: 12
}

export default Footer
