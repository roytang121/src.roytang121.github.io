import React, { Component } from 'react'
import Div from '../Div'
import './Blog.css'

/* react markdown */
import marked from 'marked'

class Blog extends Component {
  _dom: any

  componentDidMount () {
    this.props.loadBlog(this.props.wrapper)
    this._highlight()
  }

  componentDidUpdate() {
    this._highlight()
  }

  _highlight = (async = true) => {
    // global.Prism.highlightElement(this._dom, async)
    global.Prism.highlightAll()
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
      // <Markdown className='markdown-container' source={blog.data || ''} />
      <div className='markdown-container' dangerouslySetInnerHTML={{
        __html: marked(blog.data || '')
      }} ref={(node) => this._dom = node} />
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

export default Blog
