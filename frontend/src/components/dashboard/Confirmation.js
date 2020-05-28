import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setEvent } from '../../actions/event';
import PropTypes from 'prop-types';
import { isWithinInterval, addMinutes, set } from 'date-fns';
import girl_time from '../../assets/girl_time.png';

const Confirmation = ({ auth: { user }, setEvent, event: { events } }) => {
  const [displayConfrim, setDisplayConfirm] = useState(false);

  useEffect(() => {
    if (user !== null && user.routine) {
      const {
        routine: { time }
      } = user;

      const userRoutine = time;

      const hr = userRoutine.split(':')[0];
      const min = userRoutine.slice(3);

      const userPref = set(new Date(), { hours: hr, minutes: min });

      const isValid = isWithinInterval(userPref, {
        start: addMinutes(new Date(), -15),
        end: addMinutes(new Date(), 15)
      });

      isValid ? setDisplayConfirm(true) : setDisplayConfirm(false);
    }
  }, [user]);

  const checkIn = () => {
    const lastCheckIn = events[0];
    let lastCheckInDate;
    if (lastCheckIn !== undefined) {
      lastCheckInDate = new Date(lastCheckIn.date).getDate();
    }
    if (lastCheckInDate !== new Date().getDate()) {
      setEvent();
    }
    setDisplayConfirm(false);
  };

  return (
    displayConfrim && (
      <section className="confirmation">
        <div className="confirmation__card">
          <img src={girl_time} alt="timer" />
          <span className="confirmation__action">
            <p>Check in with the app to confirm you're up!</p>
            <button onClick={checkIn}>
              <span className="btn-default">Check in</span>
              <span className="btn"></span>
            </button>
          </span>
        </div>
      </section>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  event: state.event
});

Confirmation.propTypes = {
  auth: PropTypes.object.isRequired,
  setEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { setEvent })(Confirmation);
