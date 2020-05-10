import React from 'react';

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
            <button>Log in</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
