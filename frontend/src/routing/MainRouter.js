import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from '../components/layout/Landing';
import { Login } from '../components/layout/Login';
import { Loader } from '../components/layout/Loader';
import { Dashboard } from '../components/dashboard/Dashboard';
import { AuthProvider } from '../context/auth';
import { PrivateRoute } from './PrivateRoute';

export const MainRouter = () => (
  <Switch>
    <AuthProvider>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/loader" component={Loader} />
      {/* Apply privateroute here */}
      <Route exact path="/dashboard" component={Dashboard} />
    </AuthProvider>
  </Switch>
);
