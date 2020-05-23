import React, { useEffect } from 'react';
import { useDates } from '../../hooks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/event';

const Calendar = ({ getEvents, event: { events } }) => {
  const { getWeek, getToday, findCheckedDates } = useDates();
  const today = getToday();

  const checked = findCheckedDates(events);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className="calendar">
      {getWeek().map((date) =>
        date === today ? (
          <span className="item today" key={date}>
            {date}
          </span>
        ) : checked.includes(date) ? (
          <span className="item checked" key={date}>
            {date}
          </span>
        ) : (
          <span className="item" key={date}>
            {date}
          </span>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  event: state.event
});

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getEvents })(Calendar);
