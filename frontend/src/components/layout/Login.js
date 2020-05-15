import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import girl from '../../assets/girl.jpg';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
