import HOC from './HOC'

import { connect } from 'react-redux'

// default is Blog
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

export default connect(mapStateToProps, mapDispatchToProps)(HOC)
