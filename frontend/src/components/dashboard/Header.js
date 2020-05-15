import React, { useState } from 'react';
import cam from '../../assets/cam.png';

export const Header = () => {
  const [display, setDisplay] = useState(false);

  return (
    <header className="header">
      <span className="img">
        <img src={cam} alt="" />
      </span>
      <div className="header__options">
        <div
          className={display ? 'x' : 'container'}
          onClick={() => setDisplay(!display)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
      </div>
    </header>
  );
};
