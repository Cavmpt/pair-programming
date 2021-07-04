import React from 'react'
import {BrowserRouter as Router, useRoutes, Outlet} from 'react-router-dom'
import ReactDOM from 'react-dom'

// import ErrorBoundary from './components/UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'

import 'typeface-roboto-slab'

import './colors.css'

import reportWebVitals from './reportWebVitals'

import {Provider} from './store/Provider'

const routesArray = [
  {
    path: '/',
    element: <></>,
    // children: [
    //   {path: '/controls', element: <></>},
    //   {path: '/', element: <></>},
    // ],
  },
]

const App = () => {
  const routes = useRoutes(routesArray)
  return routes
}

ReactDOM.render(
  <div className='wrapper'>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </div>,
  document.getElementById('src'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
