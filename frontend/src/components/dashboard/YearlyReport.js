import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';

export const YearlyReport = () => {
  const sampleData = [1, 2, 3, 4, 5, 6, 8 ,9,10,11,12];
  return (
    <section className="yearly-report">
      <VictoryChart theme={VictoryTheme.grayscale} domainPadding={{ x: 20 }}>
        <VictoryBar
          style={{
            data: { fill: '#9cf8ce' }
          }}
          data={sampleData}
        />
      </VictoryChart>
    </section>
  );
};
