import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import { Login } from './components/layout/Login';
import { Loader } from './components/layout/Loader';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/loader" component={Loader} />
      </Switch>
    </Router>
  );
};
