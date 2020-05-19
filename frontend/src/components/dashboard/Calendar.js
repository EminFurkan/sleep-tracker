import React, { useEffect } from 'react';
import { getDates, getCurrent } from '../../utils/getDates';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/event';

const Calendar = ({ getEvents, event: { events } }) => {
  const today = getCurrent();

  console.log(events);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

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

const mapStateToProps = (state) => ({
  event: state.event
});

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getEvents })(Calendar);
