import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import App from './App'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(rootReducer, devTools, applyMiddleware(thunk, middleware))


const router = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
registerServiceWorker()
