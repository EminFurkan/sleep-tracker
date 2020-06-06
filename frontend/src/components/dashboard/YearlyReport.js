import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from 'victory';

const YearlyReport = ({ event: { events } }) => {
  const groupedByMonth = events.map((val) => new Date(val.date).getMonth());

  let data = [];
  for (let i = 1; i <= 12; i++) data.push(i);

  const getOccurrence = (array, value) => {
    return array.filter((v) => v === value).length;
  };

  data = data.map((month) => {
    let getSteakCount = getOccurrence(groupedByMonth, month);
    return { x: month, y: getSteakCount };
  });

  const tags = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <section className="yearly-report">
      <p>Yearly Progress</p>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
        height={300}
        width={450}
      >
        <VictoryAxis />
        <VictoryBar
          categories={{
            x: tags
          }}
          style={{
            data: { fill: '#69f0ae', width: 20 },
            labels: { fill: '#01579b' }
          }}
          data={data}
          x={tags['x']}
          domain={{ x: [0, 13] }}
          labels={({ datum }) => `${datum.y}`}
        />
      </VictoryChart>
    </section>
  );
};

const mapStateToProps = (state) => ({
  event: state.event
});

YearlyReport.propTypes = {
  event: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(YearlyReport);
