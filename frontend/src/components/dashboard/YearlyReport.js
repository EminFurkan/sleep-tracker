import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from 'victory';

export const YearlyReport = () => {
  const sampleData = [
    { x: 1, y: 20 },
    { x: 2, y: 30 },
    { x: 3, y: 40 },
    { x: 4, y: 50 },
    { x: 5, y: 60 },
    { x: 6, y: 70 },
    { x: 7, y: 80 },
    { x: 8, y: 30 },
    { x: 9, y: 40 },
    { x: 10, y: 10 },
    { x: 11, y: 60 },
    { x: 12, y: 20 }
  ];
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
          data={sampleData}
          x={tags['x']}
          domain={{ x: [0, 13] }}
          labels={({ datum }) => `${datum.y} hrs`}
        />
      </VictoryChart>
    </section>
  );
};
