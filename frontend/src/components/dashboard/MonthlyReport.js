import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { findConsecutive } from '../../utils/findConsecutive';

export const MonthlyReport = () => {

  const nums = [1,3,5, 2,10,2,3,15,-1, 11];

  console.log(findConsecutive(nums));

  return (
    <section className="monthly-report">
      <p>Montly Progress</p>
      <VictoryChart>
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: '#227BD8' },
            parent: { border: '4px solid #F07250' }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    </section>
  );
};
