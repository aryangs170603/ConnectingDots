import React from "react";


import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import logo from '/src/Logos/Navbar/connecting dot erp logo.png';
const footerContainerClasses = "container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center";
const sectionClasses = "mb-6 md:mb-0";
const titleClasses = "font-bold ";
const textClasses = "text-sm";
const smallTextClasses = "text-xs";
const listClasses = "space-y-1";
const linkClasses = "hover:underline";
const socialIconClasses = "flex space-x-4";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground bg-[#4f4d8c] text-white">
      <div className={footerContainerClasses}>
        <div className={sectionClasses + " md:w-1/2"}>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Company Logo" className="mr-3 h-16 " />
            <div>
              <h1 className={titleClasses}>CONNECTING DOTS ERP</h1>
              <p className={textClasses}>Preparing Students for Success</p>
              <p className={smallTextClasses}>ISO 9001: 2015 Certified Co</p>
            </div>
          </div>
          <p className={textClasses}>
            Elevate Your Learning Journey with Cutting-Edge Education Technology.
          </p>
        </div>

        <div
          className={
            "flex flex-col md:flex-row md:space-x-8 " +
            sectionClasses +
            " md:w-1/2"
          }
        >
          <div className={sectionClasses}>
            <h2 className={titleClasses + " mb-2"}>Company</h2>
            <ul className={listClasses}>
              <li>
                <a href="#" className={linkClasses}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className={linkClasses}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className={linkClasses}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className={linkClasses}>
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className={sectionClasses}>
            <h2 className={titleClasses + " mb-2"}>Support</h2>
            <ul className={listClasses}>
              <li>
                <a href="#" className={linkClasses}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={linkClasses}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className={linkClasses}>
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={titleClasses + " mb-2"}>Follow us</h2>
            <div className={socialIconClasses}>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Meta">
                <FaMeta />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-primary-foreground pt-4">
        © Copyright 2024, All Rights Reserved By Connecting dot erp
      </div>
    </footer>
  );
};

export default Footer;
