import React from 'react';
import {
  VictoryTheme,
  VictoryScatter,
  VictoryChart,
  VictoryTooltip,
  VictoryLabel,
} from 'victory';

export const Report = () => {
  const plot = [1, 2, 3, 4, 5, 6, 7, 8, 20, 12, 23, 11];
  const monthStrings = [
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
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        height={400}
        width={550}
        domainPadding={40}
      >
        <VictoryScatter
          style={{
            data: { fill: '#01579b', stroke: '#69f0ae', strokeWidth: 2 },
            labels: { fill: '#01579b', fontSize: 10, padding: 8 }
          }}
          bubbleProperty="y"
          maxBubbleSize={15}
          minBubbleSize={5}
          labels={({ datum }) => `$${datum.y} on ${datum.x}th`}
          labelComponent={<VictoryTooltip />}
          data={plot}
          domain={{ x: [0, 31] }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 14, fill: '#8b8b8b' }}
          x={270}
          y={390}
          text={`day of month`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 14, fill: '#8b8b8b' }}
          x={6}
          y={190}
          angle={270}
          text={'streak'}
        />
      </VictoryChart>
    </>
  );
};
