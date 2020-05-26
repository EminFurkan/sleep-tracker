import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setRoutine } from '../../actions/routine';
import { setAlert } from '../../actions/alert';
import girl_time from '../../assets/girl_time.png';

const Confirmation = () => {
  const [displayConfrim, setDisplayConfirm] = useState(true);

  return displayConfrim && (
    <section className="confirmation">
      <div className="confirmation__card">
        <img src={girl_time} alt="timer" />
        <span className="confirmation__action">
          <p>Check in with the app to confirm you're up!</p>
          <button onClick={() => setDisplayConfirm(false)}>
            <span className="btn-default">Check in</span>
            <span className="btn"></span>
          </button>
        </span>
      </div>
    </section>
  )
};

export default Confirmation;
