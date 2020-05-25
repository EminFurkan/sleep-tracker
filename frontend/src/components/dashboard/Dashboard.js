import React from 'react';
import Navbar from '../layout/Navbar';
import Header from './Header';
import { MonthlyReport } from './MonthlyReport';
import Month from './Month';
import { YearlyReport } from './YearlyReport';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="dashboard">
        <div className="dashboard__content">
          <Header />
          <div className="overview">
            <MonthlyReport />
            <span className="overview__2">
              <Month />
            </span>
            <YearlyReport />
          </div>
        </div>
      </section>
    </>
  );
};
