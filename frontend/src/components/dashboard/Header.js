import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setRoutine } from '../../actions/routine';
import Week from './Week';
import { findConsecutiveSeries } from '../../utils/findConsecutiveSeries';

const Header = ({ setRoutine, auth: { loading, user }, event: { events } }) => {
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

  let currentStreak;
  const streakArr = events
    .map((item) => new Date(item.date).getDate())
    .sort((a, b) => a - b);

  let consecutiveSeries = findConsecutiveSeries(streakArr);
  const finalStreakRecord = consecutiveSeries[consecutiveSeries.length - 1];
  if (finalStreakRecord !== undefined) {
    currentStreak = finalStreakRecord.length;
  }

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
          {currentStreak > 0 ? (
            <p>You're on a streak of {currentStreak}!</p>
          ) : (
            <p>Let's get this started!</p>
          )}
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
  auth: state.auth,
  event: state.event
});

Header.propTypes = {
  setRoutine: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { setRoutine })(Header);
