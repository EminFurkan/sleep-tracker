import React, { useState } from 'react';
import cam from '../../assets/cam.png';

export const Header = () => {
  const [display, setDisplay] = useState(false);

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
        <span className={display ? 'schedule display' : 'schedule'}>test</span>
      </div>
    </header>
  );
};
