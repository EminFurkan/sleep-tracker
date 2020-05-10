import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import { Login } from './components/layout/Login';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
