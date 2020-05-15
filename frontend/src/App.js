import React, { useEffect } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRouter } from './routing/MainRouter';
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

export const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
};
