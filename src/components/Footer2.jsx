import React from 'react';
import './Footer2.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="background-animation">
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>
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
        <div className="columns">
          <div className="widget">
            <div className="headline"><h3>SAP COURSES</h3></div>
            <div className="course-categories">
              <div className="sap-functional">
                <h6>SAP FUNCTIONAL COURSES</h6>
                <ul className="menu">
                  <li className="menu-item"><a href="#">SAP FICO</a></li>
                  <li className="menu-item"><a href="#">SAP SD</a></li>
                  <li className="menu-item"><a href="#">SAP MM</a></li>
                  <li className="menu-item"><a href="#">SAP PP</a></li>
                  <li className="menu-item"><a href="#">SAP HR/HCM</a></li>
                  <li className="menu-item"><a href="#">SAP QM</a></li>
                  <li className="menu-item"><a href="#">SAP PM</a></li>
                  <li className="menu-item"><a href="#">SAP SCM</a></li>
                  <li className="menu-item"><a href="#">SAP EWM</a></li>
                  <li className="menu-item"><a href="#">SAP LE</a></li>
                  <li className="menu-item"><a href="#">SAP SUCCESSFACTOR</a></li>
                </ul>
              </div>
              <div className="sap-technical">
                <h6>SAP TECHNICAL COURSES</h6>
                <ul className="menu">
                  <li className="menu-item"><a href="#">SAP ABAP</a></li>
                  <li className="menu-item"><a href="#">SAP BASIS</a></li>
                  <li className="menu-item"><a href="#">SAP NetWeaver</a></li>
                  <li className="menu-item"><a href="#">SAP BW/BI</a></li>
                  <li className="menu-item"><a href="#">SAP SOLUTION MANAGER</a></li>
                  <li className="menu-item"><a href="#">SAP S/4 HANA</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="widget">
            <div className="headline"><h3>DATA SCIENCE COURSES</h3></div>
            <ul className="menu">
              <li className="menu-item"><a href="#">MASTERS IN DATA ANALYTICS</a></li>
              <li className="menu-item"><Link to="./Datascience">MASTERS IN DATA SCIENCE</Link></li>
              <li className="menu-item"><a href="#">MASTERS IN BUSINESS ANALYTICS</a></li>
              <li className="menu-item"><a href="#">CHAT GPT & AI</a></li>
            </ul>
          </div>
          <div className="widget">
            <div className="headline"><h3>IT COURSES</h3></div>
            <ul className="menu">
              <li className="menu-item"><a href="#">ARTIFICIAL INTELLIGENCE</a></li>
              <li className="menu-item"><a href="#">FULL STACK TRAINING</a></li>
              <li className="menu-item"><a href="#">JAVA</a></li>
              <li className="menu-item"><a href="#">MERN STACK</a></li>
              <li className="menu-item"><a href="#">UI/UX DESIGN</a></li>
              <li className="menu-item"><a href="#">PYTHON</a></li>
              <li className="menu-item"><a href="#">REACT JS</a></li>
              <li className="menu-item"><a href="#">SALESFORCE</a></li>
            </ul>
          </div>
          <div className="widget">
            <div className="headline"><h3>DIGITAL MARKETING COURSES</h3></div>
            <ul className="menu">
              <li className="menu-item"><a href="#">ADVANCE DIGITAL MARKETING</a></li>
              <li className="menu-item"><a href="#">PAY PER CLICK TRAINING</a></li>
              <li className="menu-item"><a href="#">SEARCH ENGINE OPTIMIZATION</a></li>
              <li className="menu-item"><a href="#">SOCIAL MEDIA MARKETING</a></li>
              <li className="menu-item"><a href="#">ADVANCE ANALYTICS TRAINING</a></li>
            </ul>
          </div>
          <div className="widget">
            <div className="headline"><h3>DATA VISUALISATION COURSES</h3></div>
            <ul className="menu">
              <li className="menu-item"><a href="#">POWER BI</a></li>
              <li className="menu-item"><a href="#">TABLEAU</a></li>
              <li className="menu-item"><a href="#">SQL</a></li>
              <li className="menu-item"><a href="#">MICROSFT SQL</a></li>
            </ul>
          </div>
          <div className="widget">
            <div className="headline"><h3>HR COURSES</h3></div>
            <ul className="menu">
              <li className="menu-item"><a href="#">CORE HR</a></li>
              <li className="menu-item"><a href="#">HR PAYROLL</a></li>
              <li className="menu-item"><a href="#">HR MANAGEMENT</a></li>
              <li className="menu-item"><a href="#">HR ANALYTICS</a></li>
            </ul>
          </div>
          <div className="widget contact-us">
            <div className="headline"><h3>CONTACT US</h3></div>
            <ul className="contact">
              <li className="menu-item"><a href="#">Email</a></li>
              <li className="menu-item"><a href="#">Phone</a></li>
              <li className="menu-item"><a href="#">Location</a></li>
              <li className="menu-item"><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Connecting Dots ERP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
