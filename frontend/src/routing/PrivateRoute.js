import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../context/GlobalState';
import { Loader } from '../components/layout/Loader';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useContextValue();

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Loader />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
