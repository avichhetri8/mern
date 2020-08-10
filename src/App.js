import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users'
import NewPlaces from './places/containers/NewPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () =>{
  return(
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/place/new" exact>
          <NewPlaces/>
        </Route>
        <Redirect to="/" path="/"/>
      </Switch>
    </Router>
  )
}
export default App;
