import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RelatedCourses.css';
import ContactForm from '../Homepage/ContactForm';

// Importing the GIF icons
import aiLogo from '../Logos/Relatedgifs/artificial-intelligence (1).gif';
import clLogo from '../Logos/Relatedgifs/cloud--network.gif';
import codeLogo from '../Logos/Relatedgifs/coding.gif';
import compLogo from '../Logos/Relatedgifs/computer.gif';
import exchLogo from '../Logos/Relatedgifs/exchange.gif';
import javaLogo from '../Logos/Relatedgifs/java (1).gif';
import pieLogo from '../Logos/Relatedgifs/pie-chart.gif';
import setLogo from '../Logos/Relatedgifs/setting.gif';
import sciLogo from '../Logos/Relatedgifs/science.gif';
import phyLogo from '../Logos/Relatedgifs/physics.gif';

const courses = [
  { name: 'Artificial Intelligence', description: 'Learn AI from scratch', icon: aiLogo },
  { name: 'Masters in Data Science', description: 'Become a data science expert', icon: pieLogo },
  { name: 'Masters in Data Analytics', description: 'Master data analytics skills', icon: sciLogo },
  { name: 'Salesforce', description: 'Salesforce developer courses', icon: clLogo },
  { name: 'UI/UX Design', description: 'Design stunning user interfaces', icon: compLogo },
  { name: 'Full-Stack Python', description: 'Full-stack development with Python', icon: codeLogo },
  { name: 'Full-Stack Java', description: 'Full-stack development with Java', icon: javaLogo },
  { name: 'PowerBI', description: 'Business intelligence with PowerBI', icon: setLogo },
  { name: 'Google Cloud Platform', description: 'Learn GCP from experts', icon: exchLogo },
  { name: 'Reactjs Framework', description: 'Learn Reactjs from Industry Experts', icon: phyLogo },
];

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  const handleEnrollNowClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="related-courses-container text-center">
      <div className="related-courses-title">
        <h2>RELATED COURSES</h2>
      </div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <div className="related-courses-grid">
            {courses.slice(0, 5).map((course, index) => (
              <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(course.name)}>
                <div className="related-icon-container">
                  <img src={course.icon} alt={`${course.name} icon`} className="related-course-icon" />
                </div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="related-courses-grid">
            {courses.slice(5, 10).map((course, index) => (
              <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(course.name)}>
                <div className="related-icon-container">
                  <img src={course.icon} alt={`${course.name} icon`} className="related-course-icon" />
                </div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="related-carousel-radio-buttons">
        <input
          type="radio"
          name="carousel-radio"
          checked={activeIndex === 0}
          onChange={() => handleSelect(0)}
        />
        <input
          type="radio"
          name="carousel-radio"
          checked={activeIndex === 1}
          onChange={() => handleSelect(1)}
        />
      </div>

      {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
    </div>
  );
};

export default Courses;
