import React from 'react';
import './Chevron.css';

const Phases = () => {
  return (
    <div className="containerCH">
      <div id="phases">
        <ul>
          <li>
            <a href="#1" data-hover="Training Conducted">
              Training<br />Conducted
            </a>
          </li>
          <li>
            <a href="#2" data-hover="Highest Salary Drawn">
              Highest Salary<br />Drawn
            </a>
          </li>
          <li>
            <a href="#3" data-hover="Students Trained">
              Students<br />Trained
            </a>
          </li>
          <li>
            <a href="#4" data-hover="Hiring Companies">
              Hiring<br />Companies
            </a>
          </li>
          <li>
            <a href="#5" data-hover="Total Branches">
              Total<br />Branches
            </a>
          </li>
          <li>
            <a href="#6" data-hover="Full Time Corporate Trainers">
              Full Time<br />Corporate<br />Trainers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Phases;