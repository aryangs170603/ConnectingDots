import React from "react";
import "./Keypoints.css";

import logo1 from "../Logos/Keypoints/stulogo.png";
import logo2 from "../Logos/Keypoints/unilogo.png";
import logo3 from "../Logos/Keypoints/watchlogo.png";

const Keypoints = () => {
  const keyFeatures = [
    { title: "Industry Expert Trainers", desc: "Learn from seasoned professionals with extensive industry experience and knowledge." },
    { title: "24 X 7 Support", desc: "Round-the-clock assistance to resolve queries and enhance the learning experience." },
    { title: "Flexible Batches ", desc: "Craft impressive resumes to highlight your skills and achievements effectively." },
    { title: "Placement Assistance", desc: "Engage in practical projects to apply data science concepts in real-world." },
    { title: "Guaranteed Certification", desc: "Earn a recognized certification upon successful course completion." },
    { title: "Job Assurance", desc: "Receive dedicated support to secure job placements in top companies." }
  ];

  const homeAbout = [
    {
      cover: logo1,
      title: "MNC Experienced Professional ",
      desc: "Highly Qualified and Industry Experience Professionals for providing Real-Time Scenario Based Training."
    },
    {
      cover: logo2,
      title: "Corporate Style Training",
      desc: "Multiple Batches & Support Systems to make sure you can learn according to your convenience."
    },
    {
      cover: logo3,
      title: "100% Job Assistance",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual."
    },
    {
      cover: logo3,
      title: "Real Time Training & Project",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual."
    },
    {
      cover: logo3,
      title: "Experience Alteration",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual."
    },
    {
      cover: logo3,
      title: "Affordable Fees",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual."
    }
  ];

  return (
    <div className="courses-container text-center">
      <div className="keypoints-title">Keypoints</div>
      <div className="keypoints">
        <div className="circle">
          {keyFeatures.map((feature, index) => (
            <div className={`feature feature${index}`} key={index}>
              <div className="title">{feature.title}</div>
            </div>
          ))}
          <div className="center-feature">
            <div className="center-text"><span className="centre-keypoints">Keypoints</span></div>
          </div>
        </div>
        <div className="key-notes">
          
          {homeAbout.map((feature, index) => (
            <div className="note" key={index}>
              <div className="img">
                <img src={feature.cover} alt={feature.title} />
              </div>
              <div className="text">
                <strong>{feature.title}:</strong> {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
