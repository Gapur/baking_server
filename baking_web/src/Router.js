import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotesScreen from './notes/NotesScreen';
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';
import NotFoundScreen from './shared/components/NotFoundScreen';

const RouterComponent = () =>
  <Switch>
    <Route exact path="/" component={NotesScreen} />
    <Route exact path="/notes" component={NotesScreen} />
    <Route exact path='/login' component={LoginScreen} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>;

export default RouterComponent;
