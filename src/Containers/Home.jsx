// @flow

import React, { Component } from 'react'
import Div from '../Components/Div'

import './Home.css'

class Home extends Component {
  renderBio = () => {
    return (
      <Div col>
        <b>Bio</b>
      </Div>
    )
  }

  renderExperience = () => {
    return (
      <Div style={{}} className='home-navigation'>
        <ul>
          <li>
            <span className='year'>2012</span>
            <span className='location'>Hong Kong</span>
            <span className='title'>Co-founded Sensbeat ltd</span>
          </li>
          <li>
            <span className='year'>2013</span>
            <span className='location'>Silicon Valley</span>
            <span className='title'>Plug and Play</span>
          </li>
          <li>
            <span className='year'>2016</span>
            <span className='location'>Tokyo</span>
            <span className='title'>Vivivit Inc. 株式会社ビビビット</span>
          </li>
          <li>
            <span className='year'>2017</span>
            <span className='location'>Hong Kong</span>
            <span className='title'>UBS AG</span>
          </li>
        </ul>
      </Div>
    )
  }

  renderContactCard = () => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th><td>Roy Tang</td>
          </tr>
          <tr>
            <th>Location</th><td>Hong Kong</td>
          </tr>
          <tr>
            <th>Email</th><td>me@roytang.me</td>
          </tr>
          <tr>
            <th>Professions</th><td>iOS app development (Swift, Objc) ． React.js ． React Native</td>
          </tr>
        </tbody>
      </table>
    )
  }

  render () {
    return (
      <Div className='container' col>
        {this.renderBio()}
        {this.renderExperience()}
        <div style={{height: 100}} />
        {this.renderContactCard()}
      </Div>
    )
  }
}

export default Home
