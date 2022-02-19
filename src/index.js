import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'
import LandingPage from './views/landing-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/home" />
        <Route exact component={LandingPage} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
