import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeedbackandReviews.css";
import premImage1 from "../Logos/FeedbacksandReviews/review image 1.png";
import premImage2 from "../Logos/FeedbacksandReviews/review image 2.png";
import premImage3 from "../Logos/FeedbacksandReviews/review image 3.jpg";

const reviews = [
  {
    name: "Niveath P",
    review:
      "I have completed the SAP HCM course in Connecting Dots ERP in Mumbai, and I must say it was a truly world's best experience. The instructors have next level of expertise, guiding us through the complexities of SAP with clarity and patience. The course structure was well-designed, covering all essential modules comprehensively. I have recommended the course to my friends also.",
    image: premImage3,
  },
  {
    name: "Seshu Tamma",
    review:
      "In my opinion connecting dots is the best sap training institute in Mumbai offering Best sap Aruba courses with great return on money their comprehensive curriculum and experienced trainers ensure that students gain in depth knowledge and practical skills. Additionally the institute provides great placement support assisting students in securing high paying jobs in reputable organizations. ",
    image: premImage2,
  },
  {
    name: "Shweta Udainiya",
    review:
      "Connecting Dots Advancements complete projects, master coaches, adaptable learning choices, and solid position support make them the best online SAP preparing establishment in Mumbai. I did my SAP SD Course from here. I prescribe you to join Connecting Dots Advancements for best online SAP SD Course and venture out towards a fruitful vocation in SAP.",
    image: premImage1,
  },
];

const duplicateReviews = [...reviews, ...reviews];

const FeedbackAndReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setExpandedIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setSelectedIndex(selectedIndex);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <Container fluid className="feedback-section text-center" ref={containerRef}>
      <h3 className="section-subtitle">FEEDBACKS & REVIEWS</h3>
      <Carousel
        activeIndex={selectedIndex}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
      >
        {isMobile
          ? duplicateReviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  <Col xs={12} className="d-flex justify-content-center mb-4">
                    <Card
                      className={`feedback-card shadow ${
                        expandedIndex === index ? "expanded" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReadMore(index);
                      }}
                    >
                      <div className="card-body-wrapper">
                        <Card.Body>
                          <div className="img-container">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="review-image"
                            />
                            <i className="fa fa-quote-left icon"></i>
                          </div>
                          <Card.Title className="review-name">{review.name}</Card.Title>
                          <Card.Text className="review-text">
                            {expandedIndex === index
                              ? review.review
                              : `${review.review.substring(0, 80)}...`}
                          </Card.Text>
                          <Button
                            variant="link"
                            className="read-more"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleReadMore(index);
                            }}
                          >
                            {expandedIndex === index ? "Read Less" : "Read More"}
                          </Button>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))
          : duplicateReviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {[index, index + 1, index + 2].map((i) => (
                    <Col key={i} md={4} xs={12} className="d-flex justify-content-center mb-4">
                      {duplicateReviews[i] && (
                        <Card
                          className={`feedback-card shadow ${
                            expandedIndex === i ? "expanded" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReadMore(i);
                          }}
                        >
                          <div className="card-body-wrapper">
                            <Card.Body>
                              <div className="img-container">
                                <img
                                  src={duplicateReviews[i].image}
                                  alt={duplicateReviews[i].name}
                                  className="review-image"
                                />
                                <i className="fa fa-quote-left icon"></i>
                              </div>
                              <Card.Title className="review-name">{duplicateReviews[i].name}</Card.Title>
                              <Card.Text className="review-text">
                                {expandedIndex === i
                                  ? duplicateReviews[i].review
                                  : `${duplicateReviews[i].review.substring(0, 80)}...`}
                              </Card.Text>
                              <Button
                                variant="link"
                                className="read-more"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleReadMore(i);
                                }}
                              >
                                {expandedIndex === i ? "Read Less" : "Read More"}
                              </Button>
                            </Card.Body>
                          </div>
                        </Card>
                      )}
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
      </Carousel>
      {!isMobile && (
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="review-set"
              checked={selectedIndex === 0}
              onChange={() => handleSelect(0)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="review-set"
              checked={selectedIndex === 1}
              onChange={() => handleSelect(1)}
            />
          </label>
        </div>
      )}
    </Container>
  );
};

export default FeedbackAndReviews;
