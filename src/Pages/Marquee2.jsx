import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="main-container__marquee">
      <div className="main-container__marquee-track">
        <div className="main-container__marquee-items">
          <span className="main-container__marquee-item">An investment in knowledge pays the best interest.</span>
          <span className="main-container__marquee-item">The only limit to our realization of tomorrow is our doubts of today.</span>
         
        </div>
        <div aria-hidden="true" className="main-container__marquee-items">
          <span className="main-container__marquee-item">The expert in anything was once a beginner.</span>
          <span className="main-container__marquee-item">Education is not the filling of a pail, but the lighting of a fire.</span>         
        </div>
      </div>
    </div>
  );
};

export default Marquee;