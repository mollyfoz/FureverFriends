import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import App from './App'
import configureStore from './configureStore'
import createHistory from '../node_modules/history/createBrowserHistory';

const history = createHistory();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore(devTools)

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
