import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import { Login } from './components/layout/Login';
import { Loader } from './components/layout/Loader';
import { PrivateRoute } from './routing/PrivateRoute';
import { Dashboard } from './components/Dashboard';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/loader" component={Loader} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
