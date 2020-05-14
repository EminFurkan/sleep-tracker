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
          class={display ? 'x' : 'container'}
          onClick={() => setDisplay(!display)}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
    </header>
  );
};
