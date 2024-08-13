import React from 'react';
import { Helmet } from 'react-helmet';
import './Councelor.css';

const CallbackComponent = () => {
  const handleCallback = () => {
    alert('Callback request submitted!');
  };

  return (
    <div className="counselor-container-it-ds">
      <Helmet>
        <title>Connect with an Academic Counsellor | Your Course Name</title>
        <meta name="description" content="Connect with an academic counsellor to learn more about course benefits and eligibility. Request a callback to get personalized information." />
        <meta name="keywords" content="Academic Counsellor, Course Information, Eligibility, Request Callback" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="counselor-content-it-ds">
        <div className="counselor-text-it-ds">
          <h2 className="title-it-ds-counc">Connect with an Academic Counsellor</h2>
          <p className="subtitle-it-ds-counc">Get all the information about the course benefits</p>
          <p className="eligibility-it-ds">Eligibility: Anyone who graduated</p>
        </div>
        <div className="button-container-it-ds-counc">
          <button className="request-button-it-ds-counc" onClick={handleCallback}>
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallbackComponent;
