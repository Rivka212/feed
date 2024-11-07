import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RootCmp } from './RootCmp.jsx'

import './assets/styles/main.scss'


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <RootCmp />
    </Router>
  </Provider>
)
