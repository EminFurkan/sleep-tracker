import React, { useState } from 'react';
import cam from '../../assets/cam.png';

export const Header = () => {
  const [display, setDisplay] = useState(false);

  const onInput = (e) => {
    const reTime = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    const time = e.target.value;
    if (reTime.exec(time)) {
      const minute = Number(time.substring(3, 5));
      const hour = (Number(time.substring(0, 2)) % 12) + minute / 60;
      e.target.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${
        (360 * minute) / 60
      }deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${
        (360 * hour) / 12
      }deg); transform-origin: 50% 50%;' /></svg>")`;
    }
  };

  return (
    <header className="header">
      <div className="header__welcome">
        <span className="img">
          <img src={cam} alt="" />
        </span>
        <span>
          <p>You're on a streak of 22!</p>
        </span>
      </div>
      <div className="header__options">
        <div
          className={display ? 'x' : 'container'}
          onClick={() => setDisplay(!display)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <span className={display ? 'schedule display' : 'schedule'}>
          <input
            className="time"
            type="time"
            name="time"
            onInput={(e) => onInput(e)}
          />
        </span>
      </div>
    </header>
  );
};
