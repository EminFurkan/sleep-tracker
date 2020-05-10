import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <span>
          <h2>SleepTracker</h2>
        </span>
        <ul>
          <li>
            <button>How it works</button>
          </li>
          <li>
            <button>Sign up</button>
          </li>
          <li>
            <button>
              <Link to="/login">Log in</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
