import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { findConsecutiveSeries } from '../../utils/findConsecutiveSeries';

const MonthlyReport = ({ event: { events } }) => {
  const eventsArr = events
    .map((event) => new Date(event.date).getDate())
    .sort((a, b) => a - b);

  const userStreak = findConsecutiveSeries(eventsArr);

  const today = new Date().getDate();

  const plotY = [[null]];

  userStreak
    .map((currentArr, idx, data) => [
      currentArr.length,
      (data[idx + 1]
        ? data[idx + 1][0] - currentArr[currentArr.length - 1]
        : today - data[data.length - 1][data[data.length - 1].length - 1]) * -1
    ])
    .flat()
    .map((val) => {
      let start;
      if (plotY.length > 0) {
        start = plotY[plotY.length - 1][plotY[plotY.length - 1].length - 1];
      } else {
        start = 0;
      }
      let end = val + start;
      const difference = Math.abs(start - end);
      const array = new Array(difference + 1)
        .fill()
        .map((val, idx) => (start > end ? start - idx : start + idx));
      plotY.push(array);
    });

  const plot = [];
  plotY.flat().reduce((acc, val, idx) => {
      return plot.push({ x: idx, y: val });
  });

  return (
    <section className="monthly-report">
      <p>Montly Progress</p>
      <VictoryChart>
        <VictoryLine
          domain={{ x: [1, 30], y: [1, 30] }}
          interpolation="natural"
          style={{
            data: { stroke: '#227BD8' },
            parent: { border: '4px solid #F07250' }
          }}
          data={plot}
        />
      </VictoryChart>
    </section>
  );
};

const mapStateToProps = (state) => ({
  event: state.event
});

MonthlyReport.propTypes = {
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MonthlyReport);
