import React, { useEffect } from 'react';
import { Carousel, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderCarousel.css';
import TextTransition, { presets } from 'react-text-transition';
import slideImage3 from '../Logos/Headercarousel/file02.png';
import slide4 from '../Logos/Headercarousel/slide4 img.png';
import logostrip from '../Logos/Headercarousel/logo strip.png';
import SAPmodule1 from '../Logos/Headercarousel/SAP module1.png';
import DSh from '../Logos/Headercarousel/DSh.png';
import DGM from '../Logos/Headercarousel/DGM.png';
import IT from '../Logos/Headercarousel/IT.png';

const TEXTS1 = ['SAP Training', 'DATA Science', 'IT Courses', 'Digital Marketing'];
const TEXTS2 = ['SAP Functional & Technical Courses', 'Data Analytics & Business Analytics', 'Full Stack & Software Testing', 'Digital Marketing'];
const IMAGES = [SAPmodule1, DSh, IT, DGM];

const HeaderCarousel = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000); // 3 seconds
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
                <img src={logostrip} alt="companies" />
              </div>
            </div>
            <div className="carousel-image">
              <img src={slideImage3} alt="Career Potential" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide3">
            <div className="carousel-text4">
              <h1>
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS1[index % TEXTS1.length]}
                </TextTransition>
              </h1>
              <br />
              <br />
              <div>
                <h3>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS2[index % TEXTS2.length]}
                  </TextTransition>
                </h3>
              </div>
            </div>
            <div className="carousel-image3">
              
              <Card className="static-cardH">
                <Card.Img
                  className="transition-image"
                  variant="top"
                  src={IMAGES[index % IMAGES.length]}
                  alt="Future Starts Here"
                />
              </Card>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slideB">
            <div className="carousel-slide4">
              <img src={slide4} alt="Career Potential" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide">
            <div className="carousel-text">
              <h2>This is the Quiz</h2>
              <h3>Slide</h3>
              <p></p>
              <div>
                <CustomButton text="Join Now" onClick={() => alert('Join Now clicked!')} />
                <CustomButton text="Learn More" onClick={() => alert('More knowledge!')} />
              </div>
            </div>
            <div className="carousel-image"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;
