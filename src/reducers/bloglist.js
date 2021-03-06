// @flow
import { Action } from '../common/Types'

const initState = {
  items: [],
  fetching: false,
  error: null
}

const reducer = (state = initState, action: Action) => {
  if (action.type === 'LOAD_BLOGLIST_REQUEST') {
    return {...state, fetching: true}
  }

  if (action.type === 'LOAD_BLOGLIST_SUCCESS') {
    return {...state, items: action.payload, fetching: false}
  }

  return state
}

export default reducer
