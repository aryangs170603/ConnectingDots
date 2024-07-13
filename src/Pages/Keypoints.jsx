import React from "react";
import "./Keypoints.css"; 

const AboutCard = () => {
  const homeAbout = [
    {
      cover: "src/Logos/Keypoints/stulogo.png", 
      title: "Industry Expert Trainers",
      desc: "Highly Qualified and Industry Experience Professionals for providing Real-Time Scenario Based Training."
    },
    {
      cover: "src/Logos/Keypoints/watchlogo.png", 
      title: "Flexible Batches",
      desc: "Multiple Batches & Support Systems to make sure you can learn according to your convenience."
    },
    {
      cover: "src/Logos/Keypoints/unilogo.png",
      title: "Placement Assistance",
      desc: "After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual."
    }
  ];

  return (
    <>
      <section className='aboutHome'>
        <div className='container1 flexSB'>
          <div className='left-row'>
           <img src='src/Logos/Keypoints/Keypoints.png' alt='Online Learning' /> 
          </div>
          <div className='right-row'>
            <h1>KEYPOINTS</h1>
            <div className='items'>
              {homeAbout.map((val, index) => (
                <div className='item flexSB' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt={val.title} />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
