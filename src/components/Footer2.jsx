import React from 'react';
import './Footer2.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={"src/Logos/Footer/cdots.png"} alt="Connecting Dots ERP Logo" />
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/sapinstallation.pune.9"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/919004002941"><i className="fab fa-whatsapp"></i></a>
            <a href="https://m.youtube.com/@connectingdotserp4991"><i className="fab fa-youtube"></i></a>
            <a href="https://in.linkedin.com/in/connecting-dots-erp-043039171"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="column">
          <div className="widget">
            <div className="headline"><h3>About</h3></div>
                <ul className="menu horizontal">
                  <li className="menu-item"><a href="#">Enterprises Network Solution</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">HR Recruitment IT & Non-IT</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Network Consulting Services</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Top Corporate Training In Pune</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Terms of Use</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Training</a></li>
                </ul>
              </div>
              <div className="widget">
                <div className="headline"><h3>Networking Courses</h3></div>
                <ul className="menu horizontal">
                  <li className="menu-item"><a href="#">Amazon Web Services</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Linux</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Azure</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Cyber Security</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">DevOps</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Salesforce</a></li>
                </ul>
              </div>
              <div className="widget">
                <div className="headline"><h3>Software Courses</h3></div>
                <ul className="menu horizontal">
                  <li className="menu-item"><a href="#">Artificial Intelligence</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Full Stack Training</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Java</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">MERN Stack</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">UI/UX Design</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Python</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">React JS</a></li>
                </ul>
              </div>
              <div className="widget">
                <div className="headline"><h3>Other Courses</h3></div>
                <ul className="menu horizontal">
                  <li className="menu-item"><a href="#">SAP FICO</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">SAP MM</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">SAP SD</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">SAP ABAP</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Spoken English</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Train the Trainer (TTT)</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">HR</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Personality Development Classes in Pune</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Personality Development</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">Interior Designing</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">German Language</a></li>
                  <li className="menu-item">|</li>
                  <li className="menu-item"><a href="#">French Language</a></li>
                </ul>
              </div>
            </div>
        <div className="footer-bottom">
          <p>&copy; ConnectingDotsERP 2024 Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
