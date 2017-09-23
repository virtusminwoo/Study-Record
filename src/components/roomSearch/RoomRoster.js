import React from 'react'
import { Switch, Route } from 'react-router-dom'
import rooms from './rooms'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route path='/roomsearch/:id' component={rooms}/>
  </Switch>
)


export default Roster
