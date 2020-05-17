import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from '../components/layout/Landing';
import Login from '../components/layout/Login';
import { Dashboard } from '../components/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Alert from '../components/layout/Alert';

export const MainRouter = () => (
  <>
    <Alert />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </>
);
