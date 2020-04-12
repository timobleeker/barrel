import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Home from '../components/pages/home'
import WhiskeyIndex from '../components/whiskey/index'
import WhiskeyShow from '../components/whiskey/show'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/whiskeys/:id">
          <WhiskeyShow />
        </Route>
        <Route exact path="/">
          <WhiskeyIndex />
        </Route>
      </Switch>
    </Router>
  )
}
