import React from 'react';
import { Link } from 'react-router-dom';
import { useConextValue, useContextValue } from '../../context/GlobalState';

export const Navbar = () => {
  const { isAuthenticated, logout, loading } = useContextValue();

  return (
    <nav>
      <div className="container">
        <span>
          <h2>SleepTracker</h2>
        </span>
        {!loading && isAuthenticated ? (
          <ul>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button>How it works</button>
            </li>
            <li>
              <button>Sign up</button>
            </li>
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
