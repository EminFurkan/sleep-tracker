import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function register({ email, password }) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/users', body, config);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch({
        type: 'AUTH_ERROR'
      });
    }
  }

  async function login() {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/users', body, config);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch({
        type: 'AUTH_ERROR'
      });
    }
  }

  async function logout() {
    dispatch({
      type: 'LOGOUT'
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
