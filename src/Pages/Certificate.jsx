// Certificate.jsx

import React from 'react';
import './Certificate.css';
import certificateImage from '../Logos/Certificate/certificate2.jpg';

const Certificate = () => {
  return (
    <div className="certificate-section1">
      <h2 className="certificate-title1">CERTIFICATE</h2>
      <div className="certificate-content1">
        <div className="certificate-image1">
          <img src={certificateImage} alt="Certificate" />
        </div>
        <div className="certificate-text1">
          <h2>Congratulations on Completing Your Training!</h2>
          <p>This certificate proudly recognizes that Mr./Miss XYZ has successfully completed the program on dd/mm/yyyy.</p>
          <p>
            By earning this certificate, whether through our online or offline courses, you have demonstrated your commitment to excellence and continuous learning. This certificate is a testament to your dedication and hard work, recognized under the standards set by our esteemed institution.
            At <span className="highlight-founder-1">Connecting Dots ERP</span>, we strive to be the <span className="highlight-founder">best SAP training institute</span>, ensuring that our alumni are well-prepared for their careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
