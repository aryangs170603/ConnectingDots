import React, { useState } from 'react';
import './PopCourses.css';
import ContactForm from './ContactForm';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Images
import img1 from '../Icons/SAPFICO.png';
import img2 from '../Icons/SAPHANA.png';
import img3 from '../Icons/MnDS.png';
import img4 from '../Icons/DGM3.png';
import img5 from '../Icons/HR PR2.png';
import img6 from '../Icons/SEO2.png';
import img7 from '../Icons/MERN.png';
import img8 from '../Icons/UIUX.png';

const courses = [
  { name: 'SAP FICO Courses', count: 25, icon: img1 },
  { name: 'SAP HANA Courses', count: 25, icon: img2 },
  { name: 'Masters in Data Science', count: 16, icon: img3 },
  { name: 'Digital Marketing', count: 30, icon: img4 },
  { name: 'HR payroll', count: 8, icon: img5 },
  { name: 'SEO', count: 12, icon: img6 },
  { name: 'Mern Stack', count: 17, icon: img7 },
  { name: 'UI/UX', count: 17, icon: img8 },
];

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollNowClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container text-center">
      <div className="courses-title">
        <h2>OUR POPULAR COURSES</h2>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card" onClick={() => handleEnrollNowClick(course.name)}>
            <div className="icon-container">
              <img src={course.icon} alt={`${course.name} icon`} className="course-icon" />
            </div>
            <h3>{course.name}</h3>
            <p>{course.count} Seats Left</p>
            <button className="outline-btn1">ENROLL!</button>
             {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
          </div>
        ))}
      </div>
      <div className="mb-3">
        <Button className="outline-btn mr-3">Download Brochure</Button>
        <Button className="outline-btn">Book Demo</Button>
      </div>
      {/* <h2 className="section-title">OUR STUDENTS PLACED AT</h2> */}
     
    </div>
  );
};

export default Courses;
