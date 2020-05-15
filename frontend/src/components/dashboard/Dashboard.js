import React from 'react';
import Navbar from '../layout/Navbar';
import { Header } from  './Header';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="dashboard">
        <div className="dashboard__content">
          <Header />
        </div>
      </section>
    </>
  );
};
