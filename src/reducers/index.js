import { combineReducers } from 'redux'

import app from './appReducer'
import { routerReducer as router } from 'react-router-redux'
import bloglist from './bloglist'
import blogs from './blogs'

const reducers = combineReducers({
  app,
  router,
  bloglist,
  blogs
})

export default reducers
