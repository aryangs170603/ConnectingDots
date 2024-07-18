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
        <h1>FOUNDER'S MESSAGE</h1>
        </div>
        <p1>
          I have worked as a Technical and SD Consultant for more than ten years, during which time I have seen firsthand the difficulties young professionals get employment. Having established Connecting Dots ERP, a renowned IT institute, my goal is to upskill and prepare young people for the workforce. 
         <span class="highlight-founder-1"> Connecting Dots ERP</span> is committed to equipping the upcoming generation with the necessary abilities and knowledge to succeed in the fiercely competitive technology sector. Our goal is to close the skills and employment gaps by making sure our students are equipped with the knowledge and skills needed to succeed in the workforce.

          
        </p1> 
        <br>
        </br>
        <p>
          Join us at Connecting Dots ERP and take the next step towards a successful and fulfilling 
          <span class="highlight-founder">career in SAP</span>,
          <span class="highlight-founder">Data Science</span>, and other 
          <span class="highlight-founder">IT courses</span>.
        </p>

        <br></br>
        <p className="signature"> <span className='signature'>~ N.K. Singh</span></p>
      </div>
    </div>
  );
};

export default Founder;
