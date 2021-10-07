import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import UserRegistration from './pages/UserRegistration'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"> <Login /> </Route>
      <Route exact path="/home"> <Home /> </Route>
      <Route exact path="/create-user"> <UserRegistration /> </Route>
    </Switch>
  );
}

export default Routes;