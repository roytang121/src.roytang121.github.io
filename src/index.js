import React from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

/* Redux */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

/* Router */
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router'

/* Sagas */
import mySaga from './sagas'
import createSagaMiddlewae from 'redux-saga'

/* Containers */
import Home from './Containers/Home'
import Empty from './Containers/Empty'
import Blogs from './Containers/Blogs'

const sagaMiddleware = createSagaMiddlewae()

// global.fetch('/blog_tree.json').then(response => response.json().then(data => console.log(data)))

const history = createHistory()

const _routerMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(_routerMiddleware, sagaMiddleware)
)

const store = createStore(
  reducers,
  enhancer
)

sagaMiddleware.run(mySaga)

const Main =
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={Home} />
        <Route path ='/blog' component={Blogs} />
        <Route path='/works' component={Empty} />
      </App>
    </ConnectedRouter>
  </Provider>

ReactDOM.render(Main, document.getElementById('root'))
registerServiceWorker()
