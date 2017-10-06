import HOC from './HOC'

import { connect } from 'react-redux'

// default is Blog
let mapDispatchToProps = (dispatch) => {
  return {
    loadBlog: (wrapper) => wrapper && dispatch({type: 'LOAD_WORK_REQUEST', payload: wrapper})
  }
}

let mapStateToProps = (state, ownProps) => {
  let workPath = ownProps.wrapper.path
  return {
    blog: state.works && state.works[workPath] || null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HOC)
