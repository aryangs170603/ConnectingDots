import React, { useState, useCallback, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import './Certificate.css';
import certificateImage from '../Logos/Certificate/Certificate-1.png';
import { Button } from 'react-bootstrap';

// Lazy load ContactForm component
const ContactForm = lazy(() => import('./ContactForm'));  

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);  
  const [selectedCourse, setSelectedCourse] = useState(null);  

  const handleShowModal = useCallback((course) => {
    setSelectedCourse(course);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setSelectedCourse(null);
  }, []);

  return (
    <>
      <Helmet>
        <title>Connecting Dots</title>
        <meta name="description" content="Congratulations on completing your training. This certificate recognizes your achievement and equips you for global career opportunities." />
        <meta name="keywords" content="certificate, training, completion, career, skills, global opportunities" />
      </Helmet>
      <div className="certificate-section1">
        <h2 className="certificate-title1">CERTIFICATE</h2>
        <div className="certificate-content1">
          <div className="certificate-image1">
            <img src={certificateImage} alt="Certificate" loading="lazy" />
          </div>
          <div className="certificate-text1">
            <h2>Congratulations on Completing Your Training!</h2>
            <p>
              This certificate proudly recognizes that Mr./Miss XYZ has successfully completed the program on dd/mm/yyyy.
            </p>
            <p>
              Your degree and abilities are pivotal in launching your career, equipping you with the skills to compete on a global scale. These qualifications open doors to opportunities and ensure you stay competitive in the international job market.
            </p>
            <div className="mb-3" style={{ display: 'flex', justifyContent: 'left' }}>
              <Button className="outline-btnn" onClick={() => handleShowModal('Brochure')}>Enroll Now</Button>
            </div>
            {showModal && (
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm onClose={handleCloseModal} course={selectedCourse} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Certificate);
