// @flow

import { Action } from '../common/Types'

const initState = {

}

const initWorkState = {
  fetching: false,
  error: null,
  data: null,
  wrapper: null
}

const reducer = (state = initState, action: Action) => {
  if (action.type === 'LOAD_WORK_REQUEST') {
    const { path } = action.payload
    return {
      ...state,
      [path]: {
        ...initWorkState,
        fetching: true,
        wrapper: action.payload
      }
    }
  }

  if (action.type === 'LOAD_WORK_SUCCESS') {
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
