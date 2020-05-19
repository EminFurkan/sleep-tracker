import React, { useEffect } from 'react';
import { getDates, getCurrent } from '../../utils/getDates';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/event';

const Calendar = ({ getEvents, event }) => {
  const today = getCurrent();

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  console.log(event);

  return (
    <div className="calendar">
      {getDates().map((date) =>
        date === today ? (
          <span className="item today" key={date}>
            {date}
          </span>
        ) : (
          <span className="item checked" key={date}>
            {date}
          </span>
        )
      )}
    </div>
  );
};

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.events
});

export default connect(mapStateToProps, { getEvents })(Calendar);
