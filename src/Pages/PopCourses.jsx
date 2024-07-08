import React from 'react';
import './PopCourses.css'; 

const courses = [
  { name: 'SAP FICO Courses', count: 25 },
  { name: 'SAP HANA Courses', count: 25 },
  { name: 'Masters in Data Science', count: 60 },
  { name: 'Digital Marketing', count: 30 },
  { name: 'HR payroll', count: 80 },
  { name: 'Core Hr', count: 120 },
  { name: 'Mern Stack', count: 17 },
  { name: 'UI/UX', count: 17 },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-title">
        <h2>Our Popular Courses</h2>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon"> {/* Add appropriate icons here */}</div>
            <h3>{course.name}</h3>
            <p>{course.count} Seats Left</p>
            <button className="outline-btn">ENROLL NOW !</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
