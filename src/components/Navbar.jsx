import React, { useState } from 'react';
import logo from '/src/Logos/Navbar/connecting dot erp logo.png';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const handleNavClick = (link) => {
    setActiveLink(link);
  };
  const handleMouseEnter1 = () => {
    setDropdownVisible1(true);
  };
  const handleMouseLeave1 = () => {
    setDropdownVisible1(false);
  };
  const handleMouseEnter2 = () => setIsDropdownVisible2(true);
  const handleMouseLeave2 = () => setIsDropdownVisible2(false);

  return (
    <Navbar expand="lg" className="header">
      <Container fluid className="align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="Connecting Dots ERP" />
        </div>
        <div className="search-bar">
          <input type="text" className="search-bar__input" placeholder="Search..." />
          <button className="search-bar__button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

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
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
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
                {isDropdownVisible1 && (
                  <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton" style={{ display: 'block' }}>
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
                            <li><a className="dropdown-item" href="#">MEAN Stack</a></li>
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
              <div 
                className="dropdown2"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                style={{ position: 'relative', marginLeft: '20px' }} // Adjust marginLeft to align properly
              >
                <Nav.Link
                  className={`mx-lg-2 dropdown-toggle ${activeLink === 'courses2' ? 'active' : ''}`}
                  href="#"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  SAP 
                </Nav.Link>
                {isDropdownVisible2 && (
                  <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton2" style={{ display: 'block' }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        SAP Functional &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#"></a>
                          <li><a className="dropdown-item" href="#">SAP FICO</a></li>
                          <li><a className="dropdown-item" href="#">SAP MM </a></li>
                          <li><a className="dropdown-item" href="#">SAP SD</a></li>
                          <li><a className="dropdown-item" href="#">SAP HR/HCM</a></li>
                          <li><a className="dropdown-item" href="#">SAP PP</a></li>
                          <li><a className="dropdown-item" href="#">SAP SUCCESSFACTOR</a></li>
                          <li>
                            <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                          </li> 
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SAP Technical &raquo;
                      </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li><a className="dropdown-item" href="#">SAP ABAP</a></li>
                          <li><a className="dropdown-item" href="#">SAP BASIS</a></li>
                          <li>
                            <a className="dropdown-item view-more" href="/view-more">View More &raquo;</a>
                          </li>
                        </ul> 
                       </li>
                      </ul>
                )}
              </div>
              <div className="nav-links-container">
                <Nav.Link
                  className={`mx-lg-2 ${activeLink === 'placements' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavClick('placements')} 
                >
                  Placements
                </Nav.Link>
                </div >
                <div className="nav-links-container2">
                <Nav.Link
                  className={`mx-lg-2 ${activeLink === 'Corporate Training' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavClick('Corporate Training')}
                >
                  Corporate Training
                </Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
