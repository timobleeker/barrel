import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Home from '../components/pages/home'
import WhiskeyIndex from '../components/whiskey/index'
import WhiskeyShow from '../components/whiskey/show'
import WhiskeyNew from '../components/whiskey/new'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/whiskeys/new">
          <WhiskeyNew />
        </Route>
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
