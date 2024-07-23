import React, { useState } from 'react';
import './Certificate.css';
import certificateImage from '../Logos/Certificate/certificate2.jpg';
import { Button } from 'react-bootstrap';  // Make sure you have react-bootstrap installed and imported
import ContactForm from './ContactForm';  // Adjust the import based on your file structure

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);  // State to manage modal visibility
  const [selectedCourse, setSelectedCourse] = useState(null);  // State to manage selected course

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="certificate-section1">
      <h2 className="certificate-title1">CERTIFICATE</h2>
      <div className="certificate-content1">
        <div className="certificate-image1">
          <img src={certificateImage} alt="Certificate" />
        </div>
        <div className="certificate-text1">
          <h2>Congratulations on Completing Your Training!</h2>
          <p>
            This certificate proudly recognizes that Mr./Miss XYZ has successfully completed the program on dd/mm/yyyy.
          </p>
          <p>
            Your degree and abilities are pivotal in launching your career, equipping you with the skills to compete on a global scale. These qualifications open doors to opportunities and ensure you stay competitive in the international job market
          </p>
          <div className="mb-3" style={{ display: 'flex', justifyContent: 'left' }}>
            <Button className="outline-btn" onClick={() => handleShowModal('Brochure')}>Enroll Now</Button>
          </div>
          {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
