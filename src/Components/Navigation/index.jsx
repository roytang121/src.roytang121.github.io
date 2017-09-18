// @flow
import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

import Div from '../Div'
import Container from '../Container'

import Colors from '../../common/Colors'

import MediaQuery from 'react-responsive'
import query from '../../common/Responsive'

const tabs = [
  'About',
  'Works',
  'Blog',
  'Contact'
]

class Navigation extends React.Component {

  renderTabs = () => {
    return (
      <Div style={{justifyContent: 'flex-end'}}>
        {tabs.map((item, index) => {
          return (
            <NavLink 
              key={`navigation-tab-${index}`}
              style={{paddingLeft: 32, paddingRight: 32, textDecoration: 'none', color: 'black'}}
              activeStyle={{color: Colors.theme.red}}
              to={`/${item}`}>{item}</NavLink>
          )
        })}
      </Div>
    )
  }

  renderCollapsedTabs = () => {
    return (
      <Div style={{justifyContent: 'flex-start', paddingTop: 16}}>
        {tabs.map((item, index) => {
          return (
            <NavLink 
              key={`navigation-tab-${index}`}
              style={{paddingLeft: index === 0 ? 0 : 16, paddingRight: 16, textDecoration: 'none', color: 'black'}}
              activeStyle={{color: Colors.theme.red}}
              to={`/${item}`}>{item}</NavLink>
          )
        })}
      </Div>
    )
  }

  renderLogo = () => {
    return (
      <span className='logo-text' style={{flex: 1, color: Colors.theme.red, fontWeight: 600}}>ROY TANG</span>
    )
  }

  render () {
    return (
      <div style={{flex: 1}}>
        <MediaQuery query={query.screen.normal}>
          {/* expanded */}
          <Div className='navigation-expanded container' style={navigationExpandedContainer}>
            {this.renderLogo()}
            {this.renderTabs()}
          </Div>
        </MediaQuery>
        <MediaQuery query={query.screen.iphone}>
        {/* collapse */}
          <Div col className='navigation-collapsed container' style={navigationCollapsedContainer}>
            {this.renderLogo()}
            {this.renderCollapsedTabs()}
          </Div>
        </MediaQuery>
      </div>
    )
  }
}

const navigationExpandedContainer = {
  flex: 1,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Lato',
  height: 160,
  marginBottom: 80,
  alignItems: 'flex-end',
  justifyContent: 'space-between'
}

const navigationCollapsedContainer = {
  flex: 1,
  backgroundColor: 'white',
  display: 'flex',
  marginBottom: 80,
  marginTop: 32
}

export default Navigation
