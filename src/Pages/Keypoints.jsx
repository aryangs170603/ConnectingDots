import React from 'react';
import '../App.css'; // Make sure to create a corresponding CSS file
import Image1 from '../Logos/stulogo.png';
import Image2 from '../Logos/watachlogo.png';
import Image3 from '../Logos/unilogo.png';

const Keypoints = () => {
  return (
    <div className="keypoints">
      <div className="keypoint">
        <div className="keylogo">
          <img src={Image1} alt="stu" />
        </div>
        <div className="text">
          <h4>Industry Expert Trainers</h4>
          <p>Highly Qualified and Industry Experience Professionals for providing Real-Time Scenario Based Training.</p>
        </div>
      </div>
      <div className="keypoint">
        <div className="keylogo">
          <img src={Image2} alt="watch" />
        </div>
        <div className="text">
          <h4>Flexible Batches</h4>
          <p>Multiple Batches & Support Systems to make sure you can learn according to your convenience.</p>
        </div>
      </div>
      <div className="keypoint">
        <div className="keylogo">
          <img src={Image3} alt="uni" />
        </div>
        <div className="text">
          <h4>Placement Assistance</h4>
          <p>After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.</p>
        </div>
      </div>
    </div>
  );
};

export default Keypoints;