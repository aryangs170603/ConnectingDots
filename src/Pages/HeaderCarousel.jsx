import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import slideImage1 from '../Logos/file.png';
import slideImage2 from '../Logos/file01.png';
import slideImage3 from '../Logos/file02.png';
import slideImage4 from '../Logos/file03.png';
import CompanyLogos from './CompanyLogos';

const HeaderCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>Unlock your career potential</h2>
              <h3>Job Oriented Programs</h3>
              <p>
                Sap Courses | HR Courses | Software Development | Digital Marketing | Data Science | Salesforce | Cloud Computing | Full Stack
              </p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Freshers clicked!')}>Freshers</button>
                <button className="btn btn-secondary">Professionals</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage1} alt="Career Potential" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>Empower your career with us</h2>
              <h3>Comprehensive Training Programs</h3>
              <p>
                Join our courses to boost your skills and career prospects. We offer hands-on training with expert instructors.
              </p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Join Now clicked!')}>Join Now</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage2} alt="Empower Career" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>Your Future Starts Here</h2>
              <h3>Get Certified and Hired</h3>
              <p>
                Enroll in our programs and get certified. Our students have been hired by top companies around the world.
              </p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Enroll Today clicked!')}>Enroll Today</button>
                <button className="btn btn-secondary">Get Details</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage3} alt="Future Starts Here" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>Your Future Starts Here</h2>
              <h3>Get Certified and Hired</h3>
              <p>
                Enroll in our programs and get certified. Our students have been hired by top companies around the world.
              </p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Enroll Today clicked!')}>Enroll Today</button>
                <button className="btn btn-secondary">Get Details</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage4} alt="Future Starts Here" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderCarousel;
