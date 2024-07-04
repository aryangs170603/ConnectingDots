// src/components/HeaderCarousel.jsx
import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TextTransition, { presets } from 'react-text-transition';
import slideImage1 from '../Logos/Headercarousel/file.png';
import slideImage2 from '../Logos/Headercarousel/file01.png';
import slideImage3 from '../Logos/Headercarousel/file02.png';
import slideImage4 from '../Logos/Headercarousel/file03.png';

const TEXTS = ['SAP Training ', 'SAP Functional Courses', 'SAP Technical Courses'];

const HeaderCarousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000); // every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

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
              <Col>
                <p>Est. 2010 Trusted by +65000 Students</p>
              </Col>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Freshers clicked!')}>Freshers</button>
                <button className="btn btn-secondary" onClick={() => alert('Professionals clicked!')}>Professionals</button>
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
              <p>This is 2nd Slide</p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Join Now clicked!')}>Join Now</button>
                <button className="btn btn-secondary" onClick={() => alert('More knowledge!')}>Learn More</button>
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
              <h2>Unlock Your Dream Career</h2>
              <h3>Get Certified and Hired</h3>
              <p>This is 3rd Slide</p>
              <div>
                <button className="btn btn-primary" onClick={() => alert('Enroll Today clicked!')}>Enroll Today</button>
                <button className="btn btn-secondary" onClick={() => alert('Details!')}>Get Details</button>
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
            <h1>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </h1>
              
              
              <div>
                
                <button className="btn btn-primary" onClick={() => alert('Enroll Today clicked!')}>Enroll Today</button>
                <button className="btn btn-secondary" onClick={() => alert('Details!')}>Get Details</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage4} alt="Future Starts Here" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;
