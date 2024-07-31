import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "/src/Logos/Navbar/connecting dot erp logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState({
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const handleMouseEnter = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: true }));
  const handleMouseLeave = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: false }));

  const renderDropdownSAP = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown2")}
      onMouseLeave={() => handleMouseLeave("dropdown2")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown2" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        SAP
      </Nav.Link>
      {isDropdownVisible.dropdown2 && (
        <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton2" style={{ display: "block" }}>
          {[
            {
              title: "SAP Functional",
              items: ["SAP FICO", "SAP MM", "SAP SD", "SAP HR/HCM", "SAP CRM", "SAP PP", "SAP QM", "SAP PM", "SAP PS", "SAP IM", "SAP EWM", "SAP SCM", "SAP SUCCESSFACTOR", "SAP LE"]
            },
            {
              title: "SAP Technical",
              items: ["SAP ABAP", "SAP HANA", "SAP NetWeaver", "SAP BW/BI", "SAP Solution Manager", "SAP BASIS"]
            }
          ].map((submenu, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {submenu.title} &raquo;
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link className="dropdown-item view-more" to="/view-more-sap">
              View More &raquo;
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const renderDropdownITCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown3")}
      onMouseLeave={() => handleMouseLeave("dropdown3")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown3" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        IT Courses
      </Nav.Link>
      {isDropdownVisible.dropdown3 && (
        <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton3" style={{ display: "block" }}>
          {[
            {
              title: "Data Science",
              items: ["MASTERS IN DATA ANALYTICS", "MASTERS IN DATA SCIENCE", "MASTERS IN BUSINESS ANALYTICS", "CHAT GPT & AI"]
            },
            {
              title: "Software Courses",
              items: ["ARTIFICIAL INTELLIGENCE", "FULL STACK TRAINING", "JAVA", "MERN STACK", "UI/UX DESIGN", "PYTHON", "REACT JS", "SALESFORCE"]
            }
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to ="src/IT.jsx">
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link className="dropdown-item view-more" to="/view-more-it-courses">
              View More &raquo;
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const renderDropdownDataVisualisation = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown4")}
      onMouseLeave={() => handleMouseLeave("dropdown4")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown4" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton4"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        Data Visualisation
      </Nav.Link>
      {isDropdownVisible.dropdown4 && (
        <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton4" style={{ display: "block" }}>
          {["Tableau", "Power BI", "SQL", "Microsoft SQL"].map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link className="dropdown-item view-more" to="/view-more-data-visualisation">
              View More &raquo;
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const renderDropdownDigitalMarketing = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown5")}
      onMouseLeave={() => handleMouseLeave("dropdown5")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown5" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton5"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        Digital Marketing
      </Nav.Link>
      {isDropdownVisible.dropdown5 && (
        <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton5" style={{ display: "block" }}>
          {["Advance Digital Marketing", "Pay Per Click Training", "Search Engine Optimization", "Social Media Marketing", "Advance Analytics Training"].map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link className="dropdown-item view-more" to="/view-more-digital-marketing">
              View More &raquo;
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const renderDropdownHRCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter("dropdown6")}
      onMouseLeave={() => handleMouseLeave("dropdown6")}
      style={{ position: "relative", marginLeft: "20px" }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${activeLink === "dropdown6" ? "active" : ""}`}
        href="#"
        id="dropdownMenuButton6"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => e.preventDefault()}
      >
        HR Courses
      </Nav.Link>
      {isDropdownVisible.dropdown6 && (
        <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton6" style={{ display: "block" }}>
          {["Core HR", "HR Payroll", "HR Management", "SAP HR(HCM)", "HR Analytics"].map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link className="dropdown-item view-more" to="/view-more-hr-courses">
              View More &raquo;
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <Navbar expand="lg" className="header-nav">
      <Container fluid className="align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Connecting Dots ERP Logo" />
          </Link>
        </div>

        <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {renderDropdownSAP()}
          {renderDropdownITCourses()}
          {renderDropdownDataVisualisation()}
          {renderDropdownDigitalMarketing()}
          {renderDropdownHRCourses()}
          <div className="dropdown2">
            <Nav.Link
              className={`mx-lg-2 ${activeLink === "link1" ? "active" : ""}`}
              href="#"
              onClick={() => handleNavClick("link1")}
            >
              Placement
            </Nav.Link>
          </div>
          <div className="dropdown2">
            <Nav.Link
              className={`mx-lg-2 ${activeLink === "link2" ? "active" : ""}`}
              href="#"
              onClick={() => handleNavClick("link2")}
            >
              Corporate Training
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
