import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import setAuthToken from '../utils/setAuthToken';
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
  async function register(email, password) {
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

  async function login(email, password) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/auth', body, config);

      setAuthToken(res.data.token);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      });
      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch({
        type: 'AUTH_ERROR'
      });
    }
  }

  // Load user
  async function loadUser() {
    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: 'USER_LOADED',
        payload: res.data
      });
    } catch (err) {
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
        isAuthenticated: state.isAuthenticated,
        user: state.user,
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

export const useContextValue = () => useContext(GlobalContext);
