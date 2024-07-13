import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose, heading, buttonText, formType, course }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here (e.g., sending data to backend, handling locally)
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 className='headinn'>Enroll</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {formType === 'brochure' && (
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <input type="text" id="course" name="course" value={course} readOnly />
            </div>
          )}
          <button type="submit" className="submit-btn">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
