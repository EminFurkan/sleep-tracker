import React from 'react';
import Navbar from '../layout/Navbar';
import Header from './Header';
import { Report } from './Report';
import Month from './Month';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="dashboard">
        <div className="dashboard__content">
          <Header />
          <div className="overview">
            <Report />
            <span className="overview__2">
              <Month />
            </span>
            <span className="overview__3">

            </span>
          </div>
        </div>
      </section>
    </>
  );
};
