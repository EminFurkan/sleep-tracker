import React from 'react';
import bar from '../../assets/minus.svg';

export const Header = () => {
  return (
    <header className="header">
      <img src="" alt="" />
      <div className="header__options">
        <span>
          <img src={bar} alt="icon" />
          <img src={bar} alt="icon" />
        </span>
      </div>
    </header>
  ) 
}