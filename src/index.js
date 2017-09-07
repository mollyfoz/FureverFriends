import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
)
