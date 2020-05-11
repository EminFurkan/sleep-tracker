import React from 'react';
import { Link } from 'react-router-dom';
import girl from '../../assets/girl.jpg';

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login__right">
          <h2>Log in to track your progress</h2>
          <form>
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
