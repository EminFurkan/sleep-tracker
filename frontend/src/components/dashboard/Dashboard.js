import React from 'react';
import Navbar from '../layout/Navbar';
import Header from './Header';
import { Calendar } from './Calendar';
import { Report } from './Report';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="dashboard">
        <div className="dashboard__content">
          <Header />
          <Calendar />
          <Report />
        </div>
      </section>
    </>
  );
};
