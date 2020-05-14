import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRouter } from './routing/MainRouter';
import { GlobalProvider } from './context/GlobalState';

export const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <MainRouter />
      </Router>
    </GlobalProvider>
  );
};
