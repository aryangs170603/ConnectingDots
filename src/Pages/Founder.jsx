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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="signature">Abhishek Singh</p>
      </div>
    </div>
  );
};

export default Founder;
