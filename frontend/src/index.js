import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './context'
import Router from './Router'



ReactDOM.render(
  <BrowserRouter>
    <MyProvider>
      <Router />
      </MyProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
