import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/Logos/Navbar/connecting dot erp logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
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

  const dropdowns = [
    {
      id: "dropdown2",
      label: "SAP",
      submenus: [
        {
          title: "SAP Functional",
          items: [
            "SAP FICO",
            "SAP MM",
            "SAP SD",
            "SAP HR/HCM",
            "SAP CRM",
            "SAP PP",
            "SAP QM",
            "SAP PM",
            "SAP PS",
            "SAP IM",
            "SAP EWM",
            "SAP SCM",
            "SAP SUCCESSFACTOR",
            "SAP LE",
          ],
        },
        {
          title: "SAP Technical",
          items: [
            "SAP ABAP",
            "SAP HANA",
            "SAP NetWeaver",
            "SAP BW/BI",
            "SAP Solution Manager",
            "SAP BASIS",
          ],
        },
      ],
    },
    {
      id: "dropdown3",
      label: "IT Courses",
      submenus: [
        {
          title: "Data Science",
          items: [
            "MASTERS IN DATA ANALYTICS",
            "MASTERS IN DATA SCIENCE",
            "MASTERS IN BUSINESS ANALYTICS",
            "CHAT GPT & AI",
          ],
        },
        {
          title: "Software Courses",
          items: [
            "ARTIFICIAL INTELLIGENCE",
            "FULL STACK TRAINING",
            "JAVA",
            "MERN STACK",
            "UI/UX DESIGN",
            "PYTHON",
            "REACT JS",
            "SALESFORCE",
          ],
        },
      ],
    },
    {
      id: "dropdown4",
      label: "Data Visualisation",
      items: ["Tableau", "Power BI", "SQL", "Microsoft SQL"],
    },
    {
      id: "dropdown5",
      label: "Digital Marketing",
      items: [
        "Advance Digital Marketing",
        "Pay Per Click Training",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Advance Analytics Training",
      ],
    },
    {
      id: "dropdown6",
      label: "HR Courses",
      items: [
        "Core HR",
        "HR Payroll",
        "HR Management",
        "SAP HR(HCM)",
        "HR Analytics",
      ],
    },
  ];

  return (
    <Navbar expand="lg" className="header">
      <Container fluid className="align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="Connecting Dots ERP" />
        </div>

        <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {dropdowns.map((dropdown) => (
            <div
              className="dropdown2"
              key={dropdown.id}
              onMouseEnter={() => handleMouseEnter(dropdown.id)}
              onMouseLeave={() => handleMouseLeave(dropdown.id)}
              style={{ position: "relative", marginLeft: "20px" }}
            >
              <Nav.Link
                className={`mx-lg-2 dropdown-toggle ${activeLink === dropdown.id ? "active" : ""}`}
                href="#"
                id={`dropdownMenuButton${dropdown.id}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                {dropdown.label}
              </Nav.Link>
              {isDropdownVisible[dropdown.id] && (
                <ul
                  className="dropdown-menu show"
                  aria-labelledby={`dropdownMenuButton${dropdown.id}`}
                  style={{ display: "block" }}
                >
                  {dropdown.submenus
                    ? dropdown.submenus.map((submenu, index) => (
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
                            <li>
                              <a className="dropdown-item view-more" href="/view-more">
                                View More &raquo;
                              </a>
                            </li>
                          </ul>
                        </li>
                      ))
                    : dropdown.items.map((item, index) => (
                        <li key={index}>
                          <a className="dropdown-item" href="#">
                            {item}
                          </a>
                        </li>
                      ))}
                  <li>
                    <a className="dropdown-item view-more" href="/view-more">
                      View More &raquo;
                    </a>
                  </li>
                </ul>
              )}
            </div>
          ))}
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
