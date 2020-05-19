import React, { useState } from 'react';
import cam from '../../assets/cam.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setRoutine } from '../../actions/routine';

const Header = ({ setRoutine }) => {
  const [display, setDisplay] = useState(false);
  const [time, setTime] = useState();

  const handleClick = () => {
    let routine;
    if (time) {
      setRoutine(
        (routine = {
          time: time,
          string: `Your routine is set to ${time}`
        })
      );
    }
  };

  let min;
  let hr;

  if (time) {
    min = Number(time.substring(3, 5)) * 6;
    hr = Number(time.substring(0, 2)) * 30 + min / 12;
  }

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
          <div className="clock">
            <span
              className="h-hand"
              style={{ transform: `translateX(-50%) rotate(${hr}deg)` }}
            ></span>
            <span
              className="m-hand"
              style={{ transform: `translateX(-50%) rotate(${min}deg)` }}
            ></span>
          </div>
          <input
            className="time"
            type="time"
            name="time"
            pattern="[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}"
            onChange={(e) => setTime(e.target.value)}
          />
          <button onClick={handleClick}>
            <span className="btn-default">Set Routine</span>
            <span className="btn"></span>
          </button>
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.user
});

Header.propTypes = {
  setRoutine: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setRoutine })(Header);
