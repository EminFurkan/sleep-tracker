import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from '../components/layout/Landing';
import { Login } from '../components/layout/Login';
import { Dashboard } from '../components/dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute';

export const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
  </Switch>
);
