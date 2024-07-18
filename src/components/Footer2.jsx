import React from 'react';
import './Footer2.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={"src/Logos/cderp.jpg"} alt="Connecting Dots ERP Logo" />
      </div>
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <div className="widget">
              <div className="headline"><h3>About</h3></div>
              <ul className="menu">
                <li className="menu-item"><a href="#">Enterprises Network Solution</a></li>
                <li className="menu-item"><a href="#">HR Recruitment IT & Non-IT</a></li>
                <li className="menu-item"><a href="#">Network Consulting Services</a></li>
                <li className="menu-item"><a href="#">Top Corporate Training In Pune</a></li>
                <li className="menu-item"><a href="#">Terms of Use</a></li>
                <li className="menu-item"><a href="#">Training</a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="widget">
              <div className="headline"><h3>Networking Courses</h3></div>
              <ul className="menu">
                <li className="menu-item"><a href="#">Amazon Web Services</a></li>
                <li className="menu-item"><a href="#">Linux</a></li>
                <li className="menu-item"><a href="#">Azure</a></li>
                <li className="menu-item"><a href="#">Cyber Security</a></li>
                <li className="menu-item"><a href="#">DevOps</a></li>
                <li className="menu-item"><a href="#">Salesforce</a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="widget">
              <div className="headline"><h3>Software Courses</h3></div>
              <ul className="menu">
                <li className="menu-item"><a href="#">Artificial Intelligence</a></li>
                <li className="menu-item"><a href="#">Full Stack Training</a></li>
                <li className="menu-item"><a href="#">Java</a></li>
                <li className="menu-item"><a href="#">MERN Stack</a></li>
                <li className="menu-item"><a href="#">UI/UX Design</a></li>
                <li className="menu-item"><a href="#">Python</a></li>
                <li className="menu-item"><a href="#">React JS</a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="widget">
              <div className="headline"><h3>Other Courses</h3></div>
              <ul className="menu">
                <li className="menu-item"><a href="#">SAP FICO</a></li>
                <li className="menu-item"><a href="#">SAP MM</a></li>
                <li className="menu-item"><a href="#">SAP SD</a></li>
                <li className="menu-item"><a href="#">SAP ABAP</a></li>
                <li className="menu-item"><a href="#">Spoken English</a></li>
                <li className="menu-item"><a href="#">Train the Trainer (TTT)</a></li>
                <li className="menu-item"><a href="#">HR</a></li>
                <li className="menu-item"><a href="#">Personality Development Classes in Pune</a></li>
                <li className="menu-item"><a href="#">Personality Development</a></li>
                <li className="menu-item"><a href="#">Interior Designing</a></li>
                <li className="menu-item"><a href="#">German Language</a></li>
                <li className="menu-item"><a href="#">French Language</a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="widget">
              {/* <div className="headline"><h3>Contact Details</h3></div> */}
              <ul className="footer-contact-list">
                {/* <li><i className="fa fa-map-marker"></i> PUNE Branch
                  <address>
                    Pune, Maharashtra 
                  </address>
                </li>
                <li><i className="fa fa-map-marker"></i> MUMBAI Branch
                  <address>
                    Maharashtra 
                  </address> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-youtube"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
            <div className="footer-bottom">
              <p>&copy; ConnectingDotsERP 2024Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
