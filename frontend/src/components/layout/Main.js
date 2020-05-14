import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/GlobalState';
import illustration from '../../assets/illustration.jpg';

export const Main = () => {
  const [color, setColor] = useState();
  const { register, isAuthenticated } = useContextValue();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    register(email.value, password.value);
  };

  if (isAuthenticated) {
    return <Redirect to="login" />
  }

  return (
    <main className="main-content">
      <div className="main-content__left">
        <img src={illustration} alt="illustration" />
      </div>
      <div className="main-content__right">
        <h2>
          <span className={'color-' + Math.abs(color - 1)}>S</span>
          <span className={'color-' + Math.abs(color - 2)}>L</span>
          <span className={'color-' + Math.abs(color - 3)}>E</span>
          <span className={'color-' + Math.abs(color - 4)}>E</span>
          <span className={'color-' + Math.abs(color - 5)}>P</span>{' '}
          <span className={'color-' + Math.abs(color - 6)}>T</span>
          <span className={'color-' + Math.abs(color - 5)}>R</span>
          <span className={'color-' + Math.abs(color - 4)}>A</span>
          <span className={'color-' + Math.abs(color - 3)}>C</span>
          <span className={'color-' + Math.abs(color - 2)}>K</span>
          <span className={'color-' + Math.abs(color - 1)}>E</span>
          <span className={'color-' + Math.abs(color - 0)}>R</span>
        </h2>
        <p>Get a good nights sleep, and wake up happy</p>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="on"
            placeholder="Email"
            onChange={() =>
              setColor(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
            }
          />
          <input
            type="password"
            name="password"
            minLength="6"
            autoComplete="on"
            placeholder="Password"
            onChange={() =>
              setColor(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
            }
          />
          <button>
            <span className="btn-default">Sign up</span>
            <span className="btn"></span>
          </button>
        </form>
      </div>
    </main>
  );
};
