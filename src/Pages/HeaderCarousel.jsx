import React, { useEffect, useState } from 'react';
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

const TEXTS1 = [
  'Connect Your Dots with SAP Expertise',
  'Connect Your Dots with Data Science',
  'Connect Your Dots in IT Excellence',
  'Connect Your Dots in Digital Marketing'
];
const TEXTS2 = [
  'SAP is a leading enterprise software used by companies worldwide to manage business operations and customer relations.',
  'Data Science is the key to unlocking valuable insights from vast amounts of data.',
  'Advance your IT career with industry relevant courses in web development, Python, Java, and more.',
  'Digital marketing allows you to gather customer data in a way that offline marketing cant'
];
const IMAGES = [SAPmodule1, DSh, IT, DGM];

const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const [question, setQuestion] = useState({
    title: "Welcome to the <span class='highlight'>Quiz!</span>",
    text: "Hover me or click on a question button to see the question here."
  });

  const questionData = {
    Q1: {
      title: "Q.What is the function of an <span class='highlight'>HR Payroll</span> system?",
      text: "The function of an <span class='highlight'>HR payroll system</span> is to automate and manage employee compensation processes, including calculating wages, withholding taxes, and ensuring compliance with labor laws. It streamlines payroll operations, reduces errors, and provides accurate and timely payments to employees."
    },
    Q2: {
      title: "Q.What is the purpose of the <span class='highlight'>CO</span> module in <span class='highlight'>SAP FICO</span>?",
      text: "The <span class='highlight'>CO (Controlling)</span> module in <span class='highlight'>SAP FICO</span> helps manage and monitor internal costs. It supports internal reporting by tracking and analyzing costs and revenues, aiding in budgeting, planning, and controlling operations to ensure effective cost management within an organization."
    },
    Q3: {
      title: "Q.What is the role of <span class='highlight'>Express.js</span> in the <span class='highlight'>MERN</span> stack?",
      text: "<span class='highlight'>Express.js</span> is a lightweight web application framework for Node.js, used in the <span class='highlight'>MERN</span> stack. It simplifies the development of server-side applications by providing robust features for web and mobile applications, such as routing, middleware integration, and handling HTTP requests and responses."
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setIndex((index) => (index + 1) % TEXTS1.length);
        setTextVisible(true);
      }, 500);
    }, 3000); // 3 seconds
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

  const getImageStyle = (index) => {
    return {
      width: '100%',
      height: 'auto',
    };
  };

  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-slide">
          <div className="carousel-text">
            <h2>Unlock your career potential</h2><b></b>
            <h3>Job Oriented Programs</h3><b></b>
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
            <h1 className={textVisible ? 'visible' : 'hidden'}>
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS1[index]}
              </TextTransition>
            </h1>
            <h3 className={textVisible ? 'visible' : 'hidden'}>
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS2[index]}
              </TextTransition>
            </h3>
          </div>
          <div className="cardBox">
            <div className="cardH">
              <div className="content">
                <Card.Img
                  className="transition-image"
                  style={getImageStyle(index)}
                  variant="top"
                  src={IMAGES[index]}
                  alt="Future Starts Here"
                />
              </div>
            </div>
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
        <div className="carousel-slide4">
          <div className="left-sideH">
            <h1 dangerouslySetInnerHTML={{ __html: question.title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
            <div className="quiz-options">
              <div className="quiz-option">
                <button
                  className="circular-button"
                  onMouseEnter={() => setQuestion(questionData.Q1)}
                  onClick={() => setQuestion(questionData.Q1)}
                >
                  Q1
                </button>
              </div>
              <div className="quiz-option">
                <button
                  className="circular-button"
                  onMouseEnter={() => setQuestion(questionData.Q2)}
                  onClick={() => setQuestion(questionData.Q2)}
                >
                  Q2
                </button>
              </div>
              <div className="quiz-option">
                <button
                  className="circular-button"
                  onMouseEnter={() => setQuestion(questionData.Q3)}
                  onClick={() => setQuestion(questionData.Q3)}
                >
                  Q3
                </button>
              </div>
            </div>
          </div>
          <div className="right-sideH">
            <img src="src/Logos/Headercarousel/quizbg.png" alt="quiz" className="plants-image" />
            <button className="go-button">Quiz→</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;
