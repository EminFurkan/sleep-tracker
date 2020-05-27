import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setRoutine } from '../../actions/routine';
import Week from './Week';

const Header = ({ setRoutine, auth: { loading, user } }) => {
  const [display, setDisplay] = useState(false);
  const [time, setTime] = useState();
  let routine;

  const handleClick = () => {
    if (time && user !== null && time !== user.routine.time) {
      routine = {
        time: time,
        string: `Your routine is set to ${time}`
      };
      setRoutine(routine);
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
      <div className="header__profile">
        <span>
          <p>Hello {user !== null && user.email.split('@')[0]},</p>
          <p>You're on a streak of 1!</p>
        </span>
      </div>
      <Week />
      <div className="header__options">
        <div
          className={display ? 'x' : 'container'}
          onClick={() => setDisplay(!display)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <span className={display ? 'schedule display' : 'schedule'}>
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
            defaultValue={
              !loading && user !== null && user.routine && user.routine.time
            }
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
  auth: state.auth
});

Header.propTypes = {
  setRoutine: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setRoutine })(Header);
