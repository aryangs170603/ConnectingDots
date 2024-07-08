import React, { useState } from 'react';
import logo from '/src/Logos/Navbar/connecting dot erp logo.png';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <Navbar expand="lg" className="header">
      <Container fluid className="align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="Connecting Dots ERP" />
        </div>
        <form action="" className="search">
          <input className="search__input" type="search" placeholder="Search" id="searchInput" />
          <div className="search__icon-container">
            <label htmlFor="searchInput" className="search__label" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"/></svg>
            </label>
            <button className="search__submit" aria-label="Search">
              <svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"/></svg>
            </button>
          </div>
        </form>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <div 
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
              >
                <Nav.Link
                  className={`mx-lg-2 dropdown-toggle ${activeLink === 'courses' ? 'active' : ''}`}
                  href="#"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Courses
                </Nav.Link>
                {isDropdownVisible && (
                  <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton" style={{ display: 'block' }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        SAP &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">SAP Functional &raquo;</a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" href="#">SAP FICO</a></li>
                            <li><a className="dropdown-item" href="#">SAP MM 2</a></li>
                            <li><a className="dropdown-item" href="#">SAP SD</a></li>
                            <li><a className="dropdown-item" href="#">SAP HR/HCM</a></li>
                            <li><a className="dropdown-item" href="#">SAP PP</a></li>
                            <li><a className="dropdown-item" href="#">SAP SUCCESSFACTOR</a></li>
                            <li>
                              <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">SAP Technical &raquo;</a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" href="#">SAP ABAP</a></li>
                            <li><a className="dropdown-item" href="#">SAP BASIS</a></li>
                            <li>
                              <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        IT Courses &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">Data Science &raquo;</a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" href="#">Masters in Data Science</a></li>
                            <li><a className="dropdown-item" href="#">Masters in Data Analytics</a></li>
                            <li><a className="dropdown-item" href="#">Masters in Business Analytics</a></li>
                            <li><a className="dropdown-item" href="#">Chat Gpt and AI</a></li>
                            <li>
                              <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Full Stack &raquo;</a>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" href="#">Full Stack Python </a></li>
                            <li><a className="dropdown-item" href="#">Full Stack Java</a></li>
                            <li><a className="dropdown-item" href="#">MERN Stack </a></li>
                            <li><a className="dropdown-item" href="#">MEAN S</a></li>
                            </ul>
                        </li>
                        <li>
                          <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Data Visualisation &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li><a className="dropdown-item" href="#">POWER BI</a></li>
                        <li><a className="dropdown-item" href="#">TABLEAU</a></li>
                        <li>
                          <a className="dropdown-item" href="#"> MySQL </a>

                        </li>
                        <li><a className="dropdown-item" href="#">Microsoft SQL</a></li>
                        <li>
                          <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Digital Marketing &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li><a className="dropdown-item" href="#">Advance Digital Marketing</a></li>
                        <li><a className="dropdown-item" href="#">Pay Per Click Training </a></li>
                        <li>
                          <a className="dropdown-item" href="#"> Search Engine Optimization </a>

                        </li>
                        <li><a className="dropdown-item" href="#"> Social Media Marketing</a></li>
                        <li><a className="dropdown-item" href="#"> Advance Analytics Training </a></li>
                        <li>
                          <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                        </li>
                      </ul>

                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        HR Courses &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li><a className="dropdown-item" href="#">Core HR</a></li>
                        <li><a className="dropdown-item" href="#">HR Payroll </a></li>
                        <li>
                          <a className="dropdown-item" href="#"> HR Management </a>

                        </li>
                        <li><a className="dropdown-item" href="#"> SAP HR(HCM)</a></li>
                        <li><a className="dropdown-item" href="#"> HR Analytics </a></li>
                        <li><a className="dropdown-item" href="#"> Advance HR Analytics  </a></li>
                        <li><a className="dropdown-item" href="#"> PMS Training  </a></li>
                        <li>
                          <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                        </li>
                      </ul>

                    </li>
                  </ul>
                )}
              </div>
              <Nav.Link
                className={`mx-lg-2 ${activeLink === 'placements' ? 'active' : ''}`}
                href="#"
                onClick={() => handleNavClick('placements')}
              >
                Placements
              </Nav.Link>
              <Nav.Link
                className={`mx-lg-2 ${activeLink === 'blogs' ? 'active' : ''}`}
                href="#"
                onClick={() => handleNavClick('blogs')}
              >
                Blogs
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;