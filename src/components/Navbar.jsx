import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "/src/Logos/Navbar/connecting dot erp logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
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
              link: "/sap-functional",
              items: [
                { name: "SAP FICO", link: "/sap-functional/fi-co" },
                { name: "SAP MM", link: "/sap-functional/mm" },
                { name: "SAP SD", link: "/sap-functional/sd" },
                { name: "SAP HR/HCM", link: "/sap-functional/hr-hcm" },
                { name: "SAP CRM", link: "/sap-functional/crm" },
                { name: "SAP PP", link: "/sap-functional/pp" },
                { name: "SAP QM", link: "/sap-functional/qm" },
                { name: "SAP PM", link: "/sap-functional/pm" },
                { name: "SAP PS", link: "/sap-functional/ps" },
                { name: "SAP IM", link: "/sap-functional/im" },
                { name: "SAP EWM", link: "/sap-functional/ewm" },
                { name: "SAP SCM", link: "/sap-functional/scm" },
                { name: "SAP SUCCESSFACTOR", link: "/sap-functional/successfactor" },
                { name: "SAP LE", link: "/sap-functional/le" },
              ],
            },
            {
              title: "SAP Technical",
              link: "/sap-technical",
              items: [
                { name: "SAP ABAP", link: "/sap-technical/abap" },
                { name: "SAP HANA", link: "/sap-technical/hana" },
                { name: "SAP NetWeaver", link: "/sap-technical/netweaver" },
                { name: "SAP BW/BI", link: "/sap-technical/bw-bi" },
                { name: "SAP Solution Manager", link: "/sap-technical/solution-manager" },
                { name: "SAP BASIS", link: "/sap-technical/basis" },
              ],
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={submenu.link}>
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.name}
                    </Link>
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
              link: "/it/data-science",
              items: [
                { name: "MASTERS IN DATA ANALYTICS", link: "/it/data-science/masters-in-data-analytics" },
                { name: "MASTERS IN DATA SCIENCE", link: "/it" },
                { name: "MASTERS IN BUSINESS ANALYTICS", link: "/it/data-science/masters-in-business-analytics" },
                { name: "CHAT GPT & AI", link: "/it/data-science/chat-gpt-ai" },
              ],
            },
            {
              title: "Software Courses",
              link: "/it/software-courses",
              items: [
                { name: "ARTIFICIAL INTELLIGENCE", link: "/it/software-courses/artificial-intelligence" },
                { name: "FULL STACK TRAINING", link: "/it/software-courses/full-stack-training" },
                { name: "JAVA", link: "/it/software-courses/java" },
                { name: "MERN STACK", link: "/it/software-courses/mern-stack" },
                { name: "UI/UX DESIGN", link: "/it/software-courses/ui-ux-design" },
                { name: "PYTHON", link: "/it/software-courses/python" },
                { name: "REACT JS", link: "/it/software-courses/react-js" },
                { name: "SALESFORCE", link: "/it/software-courses/salesforce" },
              ],
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={submenu.link}>
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link className="dropdown-item" to={item.link}>
                      {item.name}
                    </Link>
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
          {[
            { name: "Tableau", link: "/data-visualisation/tableau" },
            { name: "Power BI", link: "/data-visualisation/power-bi" },
            { name: "SQL", link: "/data-visualisation/sql" },
            { name: "Microsoft SQL", link: "/data-visualisation/microsoft-sql" },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
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
          {[
            { name: "Advance Digital Marketing", link: "/digital-marketing/advance-digital-marketing" },
            { name: "Pay Per Click Training", link: "/digital-marketing/pay-per-click-training" },
            { name: "Search Engine Optimization", link: "/digital-marketing/search-engine-optimization" },
            { name: "Social Media Marketing", link: "/digital-marketing/social-media-marketing" },
            { name: "Advance Analytics Training", link: "/digital-marketing/advance-analytics-training" },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
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
          {[
            { name: "Core HR", link: "/hr-courses/core-hr" },
            { name: "HR Payroll", link: "/hr-courses/hr-payroll" },
            { name: "HR Management", link: "/hr-courses/hr-management" },
            { name: "SAP HR(HCM)", link: "/hr-courses/sap-hr-hcm" },
            { name: "HR Analytics", link: "/hr-courses/hr-analytics" },
          ].map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.name}
              </Link>
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
