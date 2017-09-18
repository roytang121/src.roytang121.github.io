// @flow

import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { slice } from 'lodash/slice'

const getBlogs = (state) => state.blogs

async function jsonFetch (url) {
  const response = await global.fetch(url)
  const json = await response.json()
  return json
}

async function textFetch (url) {
  const response = await global.fetch(url)
  const text = await response.text()
  return text
}

function* appDidMount (action) {
  yield put({type: 'LOAD_BLOGLIST_REQUEST', payload: null})
}

function* fetchBloglist (action) {
  const response = yield jsonFetch('/blog_list.json')
  yield put({type: 'LOAD_BLOGLIST_SUCCESS', payload: response})

  // fetch first 10 posts
  // for (let blog of response.slice(0, 10)) {
  //   yield put({type: 'LOAD_BLOG_REQUEST', payload: blog})
  // }
}

function* fetchBlog (action) {
  let { path } = action.payload

  /* skip if blog already cached */
  // let blogs = yield select(getBlogs)
  // if (blogs[path].data !== null) {
  //   yield put({type: 'LOAD_BLOG_CACHED', payload: path})
  //   return
  // }

  let rootDir = '/blogs'
  let fetchPath = `${rootDir}${path}`
  const response = yield textFetch(fetchPath)
  let payload = {
    path: path,
    data: response
  }
  yield put({type: 'LOAD_BLOG_SUCCESS', payload: payload})
}

function* mySaga () {
  yield takeLatest('APP_DID_MOUNT', appDidMount)
  yield takeLatest('LOAD_BLOGLIST_REQUEST', fetchBloglist)
  yield takeEvery('LOAD_BLOG_REQUEST', fetchBlog)
}

export default mySaga
