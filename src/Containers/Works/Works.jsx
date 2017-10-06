// @flow

import React from 'react'
import { connect } from 'react-redux'
import Div from '../../Components/Div'
import Container from '../../Components/Container'

import Work from '../../Components/Blog/Work'

class Works extends React.Component {

  renderBlog = (wrapper) => {
    return (
      <Work wrapper={wrapper} />
    )
  }

  renderBlogList = () => {
    return (
      <Div col style={{flex: 1}}>
        { this.props.bloglist && this.props.bloglist.items &&
          this.props.bloglist.items.map((item, index) => {
            return <div key={`work-${index}`}>{this.renderBlog(item)}</div>
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
    bloglist: state.workslist,
    blogs: state.works
  }
}

export default connect(mapStateToProps, null)(Works)
