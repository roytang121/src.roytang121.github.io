// @flow

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {
  componentDidMount () {
    this.props.appDidMount()
  }

  render () {
    return (
      <div className='App' style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', maxWidth: 800, margin: '0 auto'}}>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    appDidMount: () => dispatch({type: 'APP_DID_MOUNT'})
  }
}

// https://github.com/ReactTraining/react-router/issues/4671
export default withRouter(connect(null, mapDispatchToProps)(App))
