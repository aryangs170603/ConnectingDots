import React, { useState, useEffect } from "react";
import "./Contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    course: "",
  });

  const [isMobileView, setIsMobileView] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
        setIsFormVisible(false);
      } else {
        setIsMobileView(false);
        setIsFormVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {isMobileView && (
        <button className="contact-us-button" onClick={toggleFormVisibility}>
          {isFormVisible ? "Close" : "Contact Us"}
        </button>
      )}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Eg:Ram"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Eg: +91-1234567890"
                value={formData.contact}
                onChange={handleChange}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Select a course
                </option>
                <option value="course1">SAP</option>
                <option value="course2">IT Courses</option>
                <option value="course3">Digital Marketing</option>
                <option value="course4">Data Visualisation</option>
                <option value="course5">HR Courses</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
