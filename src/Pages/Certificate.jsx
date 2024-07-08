import React from 'react';
import './Certificate.css';
import certificateImage from '../Logos/Certificate/certificate2.jpg';

const Certificate = () => {
  return (
    <div className="certificate-section">
      <h2 className="certificate-title">Certificates</h2>
      <div className="certificate-content">
        <div className="certificate-image">
          <img src={certificateImage} alt="Certificate" />
        </div>
        <div className="certificate-text">
          <h2>Congratulations on Completing Your Training!</h2>
          <p>This certificate certifies that Mr XYZ has successfully completed the program on dd/mm/yyyy.</p>
          <p>
            By earning this certificate, you have also earned a total of 24 credits, which are recognized under the
            guidelines approved by the Ministry of Micro, Small and Medium Enterprises (MSME). These credits can be
            utilized in furthering your education or in gaining professional recognition in your chosen field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
