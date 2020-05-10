import React from 'react';
import bird from '../../assets/bird.png';
import plants from '../../assets/plants.png';

export const HowItWorks = () => (
  <section className="how-it-works">
    <img src={bird} alt="bird-illustration" />
    <img className="plants" src={plants} alt="plant-illustration" />
    <img className="plants-2" src={plants} alt="plant-illustration" />
    <div className="how-it-works__text">
      <h2>How it works</h2>
      <ul>
        <li>Set a time</li>
        <li>Actually wake up and let the app know you are awake</li>
        <p>The app will then..</p>
        <li>Keep track of your sleeping habits</li>
        <li>
          Help you create a visual chain and form a healthy sleeping schedule
        </li>
      </ul>
    </div>
  </section>
);
