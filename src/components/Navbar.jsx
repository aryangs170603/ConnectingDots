import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/Logos/Navbar/connecting dot erp logo.png";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
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

  return (
    <Navbar expand="lg" className="header">
      <Container fluid className="align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="Connecting Dots ERP" />
        </div>

        <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {[
            { id: "dropdown2", label: "SAP" },
            { id: "dropdown3", label: "IT Courses" },
            { id: "dropdown4", label: "Data Visualisation" },
            { id: "dropdown5", label: "Digital Marketing" },
            { id: "dropdown6", label: "HR Courses" },
          ].map((dropdown) => (
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
                  {dropdown.id === "dropdown2" && (
                    <>
                      <li>
                        <a className="dropdown-item" href="#">
                          SAP Functional &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP FICO
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP MM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP SD
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP HR/HCM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP CRM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP PP
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP QM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP PM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP PS
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP IM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP EWM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP SCM
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP SUCCESSFACTOR
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP LE
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item view-more"
                              href="/view-more"
                            >
                              View More &raquo;
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SAP Technical &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP ABAP
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP HANA
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP NetWeaver
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP BW/BI
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP Solution Manager
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SAP BASIS
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item view-more"
                              href="/view-more"
                            >
                              View More &raquo;
                            </a>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                  {dropdown.id !== "dropdown2" && (
                    <>
                      <li>
                        <Link className="dropdown-item" to="src/IT.jsx">
                          {" "}
                          DATA SCIENCE &raquo;
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          POWER BI
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          MySQL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          MICROSOFT SQL
                        </a>
                      </li>
                    </>
                  )}
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
