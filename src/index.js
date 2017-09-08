import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore(devTools)


ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
