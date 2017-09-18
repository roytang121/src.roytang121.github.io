import React, { Component } from 'react'
import Div from '../Div'
import { connect } from 'react-redux'
import './Blog.css'

/* react markdown */
import Markdown from 'react-markdown'

class Blog extends Component {

  componentDidMount () {
    this.props.loadBlog(this.props.wrapper)
  }

  renderHeader = (wrapper) => {
    return (
      <Div style={{flex: 1, alignItems: 'center'}} col>
        <div className='title-muted'>{wrapper.date}</div>
        <h1>{wrapper.title}</h1>
      </Div>
    )
  }

  renderBody = (blog) => {
    return (
      <Markdown className='markdown-container' source={blog.data || ''} />
    )
  }

  render () {
    if (!this.props.wrapper) { return null }

    const wrapper = this.props.wrapper

    return (
      <Div style={{flex: 1}} col>
        { this.renderHeader(wrapper) }
        { this.props.blog &&
          this.renderBody(this.props.blog)
        }
      </Div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    loadBlog: (wrapper) => wrapper && dispatch({type: 'LOAD_BLOG_REQUEST', payload: wrapper})
  }
}

let mapStateToProps = (state, ownProps) => {
  let blogPath = ownProps.wrapper.path
  return {
    blog: state.blogs && state.blogs[blogPath] || null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
