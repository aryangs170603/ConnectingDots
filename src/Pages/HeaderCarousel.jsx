import React, { useEffect } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TextTransition, { presets } from 'react-text-transition';
import slideImage1 from '../Logos/Headercarousel/file.png';
import slideImage2 from '../Logos/Headercarousel/file01.png';
import slideImage3 from '../Logos/Headercarousel/file02.png';
import slide4 from '../Logos/Headercarousel/slide4 img.png';
import logostrip from '../Logos/Headercarousel/logo strip.png';
import SAPmod from '../Logos/Headercarousel/SAP module1.png'
const TEXTS1 = ['SAP Training ', 'DATA Science', 'IT Courses'];
const TEXTS2 = ['SAP Functional & Technical Courses ', 'Data Analytics & Business Analytics', 'Full Stack & Software Testing'];

const HeaderCarousel = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000); // every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Lato&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const CustomButton = ({ text, onClick }) => (
    <button className="custom-btn btn-3" onClick={onClick}>
      <span>{text}</span>
    </button>
  );

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
                <CustomButton text="Freshers" onClick={() => alert('Freshers clicked!')} />
                <CustomButton text="Professionals" onClick={() => alert('Professionals clicked!')} />
              </div>
              <div className="logostrip">
              <img src={logostrip} alt="companies"/>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage3} alt="Career Potential" />
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
                <CustomButton text="Join Now" onClick={() => alert('Join Now clicked!')} />
                <CustomButton text="Learn More" onClick={() => alert('More knowledge!')} />
              </div>

            </div>
            <div className="carousel-image">
              <img src={slideImage2} alt="Empower Career" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text4">
              <h1>
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS1[index % TEXTS1.length]}
                </TextTransition>
              </h1>
              <br></br>
              <br></br>
              
              <div>
                <h3>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS2[index % TEXTS2.length]}
                  </TextTransition>
                </h3>
              </div>
              <div>
                {/* <CustomButton text="Enroll Today" onClick={() => alert('Enroll Today clicked!')} />
                <CustomButton text="Get Details" onClick={() => alert('Details!')} /> */}
              </div>
            </div>
            <div className="carousel-image">
              <img src={SAPmod} alt="Future Starts Here" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide4">

            <img src={slide4} alt="Career Potential" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;
