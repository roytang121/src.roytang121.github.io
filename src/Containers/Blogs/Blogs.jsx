// @flow

import React from 'react'
import { connect } from 'react-redux'
import Div from '../../Components/Div'
import Container from '../../Components/Container'

import Blog from '../../Components/Blog'

class Blogs extends React.Component {

  renderBlog = (wrapper) => {
    return (
      <Blog wrapper={wrapper} />
    )
  }

  renderBlogList = () => {
    return (
      <Div col style={{flex: 1}}>
        { this.props.bloglist && this.props.bloglist.items &&
          this.props.bloglist.items.map((item, index) => {
            return <div key={`blog-${index}`}>{this.renderBlog(item)}</div>
          })
        }
      </Div>
    )
  }

  render () {
    return (
      <Container className='container' col>
        {this.renderBlogList()}
      </Container>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    bloglist: state.bloglist,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(Blogs)
