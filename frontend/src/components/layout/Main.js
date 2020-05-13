import React, { useState } from 'react';
import illustration from '../../assets/illustration.jpg';

export const Main = () => {
  const [color, setColor] = useState();

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   register({ email, password });
  // };

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
        <form>
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
