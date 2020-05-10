import React from 'react';
import { Navbar } from './Navbar';
import { Main } from './Main';
import { HowItWorks } from './HowItWorks';

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <HowItWorks />
    </div>
  );
};
