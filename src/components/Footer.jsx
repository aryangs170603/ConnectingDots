import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faInstagram , faMeta} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={"src/Logos/Footer/cderp.jpg"} alt="Connecting Dots ERP Logo" />
          
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#refund">Refund Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow us</h3>
          
          <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href="#twitter"><FontAwesomeIcon icon={faXTwitter} /> </a>
          <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /> </a>
          <a href="#Meta"><FontAwesomeIcon icon={faMeta} /> </a>
         
          <div className="footer-location">
            <h3>Locations</h3>
            
            <a href="https://maps.app.goo.gl/CXXc8kWbFE4EcKH38">Address: 4th Floor,Radhika Avenue, Near Jagtap Dairy Circle, Wakad Nasik Road Beside savitribai Phule Park, Pimple Saudagar, Pimple Nilakh, Pune, Maharashtra 411027</a>  
            
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024, All Rights Reserved By Connecting dot erp</p>
      </div>
    </footer>
  );
};

export default Footer;
