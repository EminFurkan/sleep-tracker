import React from 'react';
import { getDates, getCurrent } from '../../utils/getDates';

export const Calendar = () => {
  const today = getCurrent();

  return (
    <div className="calendar">
      {getDates().map((date) =>
        date === today ? (
          <span className="item today" key={date}>
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
