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
      // (360 * minute) / 60
      // (360 * hour) / 12
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
          <p>
            Once you set a routine, you will have the chance to confirm you're
            awake within ∓15 minute range of your preferred goal
          </p>
          <span className="h-hand"></span>
          <span className="m-hand"></span>
          <input
            className="time"
            type="time"
            name="time"
            onInput={(e) => onInput(e)}
          />
          <button>
            <span className="btn-default">Set Routine</span>
            <span className="btn"></span>
          </button>
        </span>
      </div>
    </header>
  );
};
