import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => (
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
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
