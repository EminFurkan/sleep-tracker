import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRouter } from './routing/MainRouter';

export const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};
