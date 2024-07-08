import React from 'react';
import './Training2P.css'; 

const App = () => {
  return (
    <div className="container">
      <img src={require('src/Logos/Training2P/T2P.jpg')} alt="Background" className="background-image" />
      <div className="card card1">
        <h2>01</h2>
        <h3>Career Advice</h3>
        <p>A dedicated career expert will guide you by putting light on which course to select based on your interests and qualifications. At Itvedant, we provide our students with an interesting syllabus for our IT Courses.</p>
      </div>
      <div className="card card2">
        <h2>02</h2>
        <h3>Enrollment</h3>
        <p>Once you enroll in the course, a dedicated Relationships Manager will be provided to support you throughout the course completion period.</p>
      </div>
      <div className="card card3">
        <h2>03</h2>
        <h3>Follow 3A</h3>
        <p>3A (Attendance, Assignment & Assessment) is a learning model designed by us where students have to score a minimum 90%.</p>
      </div>
      <div className="card card4">
        <h2>04</h2>
        <h3>Projects</h3>
        <p>Being one of the most desired IT Training Institutes, we provide our students with 30+ Industry oriented projects and case studies to make our students Industry-ready professionals.</p>
      </div>
      <div className="card card5">
        <h2>05</h2>
        <h3>Interviews</h3>
        <p>A total of 150+ mocks are planned for each student to prepare them for technical interviews.</p>
      </div>
      <div className="card card6">
        <h2>06</h2>
        <h3>Job</h3>
        <p>Itvedant being a trustworthy Software Training Institute, starts working on the interviews for the students’ placements soon after their course completion.</p>
      </div>
    </div>
  );
};

export default App;
