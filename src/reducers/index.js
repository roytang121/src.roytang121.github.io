import { combineReducers } from 'redux'

import app from './appReducer'
import { routerReducer as router } from 'react-router-redux'
import bloglist from './bloglist'
import blogs from './blogs'
import workslist from './workslist'
import works from './works'

const reducers = combineReducers({
  app,
  router,
  bloglist,
  blogs,
  workslist,
  works
})

export default reducers
