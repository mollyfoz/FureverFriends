import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { ConnectedRouter } from 'react-router-redux'
import './index.css'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createHistory()
const store = configureStore(devTools, history)


const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
registerServiceWorker()
