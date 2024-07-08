import React from 'react';
import './Founder.css';


const Founder = () => {
  return (
    <div className="founder-container">
      <div className="founder-image">
        <img src="src/Logos/Founder/founder.png" alt="Founder" />
      </div>
      <div className="founder-message">
        <div className="founder-name">
        <h1>Founder's Message</h1>
        </div>
        <p>
          With over a decade of experience as a Techno and SD Consultant, I witnessed the struggles young professionals faced in securing jobs. Driven by a vision to upskill the youth and make them job-ready, I founded Connecting Dots ERP, a leading IT institute. Utilizing my IT expertise, I established an institution that has successfully trained over 10,000+ students in rewarding careers.
          At Connecting Dots ERP, we are dedicated to empowering the next generation with the skills and knowledge required to excel in the competitive tech industry. Our mission is to bridge the gap between education and employment, ensuring that our students are well-prepared to meet industry demands.
          
        </p>
        <p>
          Join us at Connecting Dots ERP and take the next step towards a successful and fulfilling career in SAP ,Data Science and other  IT courses
        </p>
        <br></br>
        <p className="signature">~N.K. Singh</p>
      </div>
    </div>
  );
};

export default Founder;
