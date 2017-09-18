// @flow

import { Action } from '../common/Types'

const initState = {
}

const initBlogState = {
  fetching: false,
  error: null,
  data: null,
  wrapper: null
}

const reducer = (state = initState,  action: Action) => {
  if (action.type === 'LOAD_BLOG_REQUEST') {
    const { path } = action.payload
    return {
      ...state,
      [path]: {
        ...initBlogState,
        fetching: true,
        wrapper: action.payload
      }
    }
  }

  if (action.type === 'LOAD_BLOG_SUCCESS') {
    const { path, data } = action.payload
    return {
      ...state,
      [path]: {
        ...state[path],
        fetching: false,
        data: data
      }
    }
  }
  return state
}

export default reducer
