import React from 'react';
import { useDates } from '../../hooks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { format, startOfMonth, endOfMonth } from 'date-fns';

const Month = ({ event: { events } }) => {
  const { getMonth, findCheckedDates, getToday } = useDates();
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const today = getToday();
  const currentMonth = format(new Date(), 'MMM');
  const firstDayOfMonth = startOfMonth(new Date()).getDay();
  const lastDateOfPreviousMonth = format(
    endOfMonth(new Date().setDate(0)),
    'dd'
  );
  const remainerDates = [];

  const month = new Date().getMonth();

  events = events.reduce(
    (acc, event) => (
      new Date(event.date).getMonth() === month && acc.push(event), acc
    ),
    []
  );

  const checked = findCheckedDates(events, 'month');

  for (
    let i = Number(lastDateOfPreviousMonth);
    i > lastDateOfPreviousMonth - firstDayOfMonth + 1;
    i--
  ) {
    remainerDates.unshift(i);
  }

  return (
    <div className="month">
      <span className="month__title"> {currentMonth} </span>
      <ul className="month__day-tags">
        {days.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <div className="month__days">
        {remainerDates.map((day) => (
          <span className="remainer" key={day}>
            {day}
          </span>
        ))}
        {getMonth().map((day) =>
          day === today ? (
            <span className="today" key={day}>
              {' '}
              {day}{' '}
            </span>
          ) : checked.includes(day) ? (
            <span className="checked" key={day}>
              {' '}
              {day}{' '}
            </span>
          ) : (
            <span key={day}>{day}</span>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  event: state.event
});

Month.propTypes = {
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Month);
