import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/GlobalState';
import girl from '../../assets/girl.jpg';

export const Login = () => {
  const { login, isAuthenticated } = useContextValue();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__right">
          <h2>Log in to track your progress</h2>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              autoComplete="on"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              minLength="6"
              autoComplete="on"
              placeholder="Password"
            />
            <button>
              <span className="btn-default">Login</span>
              <span className="btn"></span>
            </button>
          </form>
          <footer>
            <p>
              Don't have an account?{' '}
              <span>
                <Link to="/">Sign up</Link>
              </span>
            </p>
          </footer>
        </div>
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
};
