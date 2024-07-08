import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import premImage from "../Logos/FeedbacksandReviews/review image.png";

const reviews = [
  {
    name: "Tejas Pimple",
    review:
      "This is the best institute for learning various SAP modules. All the trainers are well experienced and the way of teaching is very good all theory topics are taught from the basics concept and the practice is done on the system server which makes it more easier to learn.100% placement assistance is also provided for every course.",
    image: premImage,
  },
  {
    name: "Dhanashree Gabhane",
    review:
      "Connecting Dots ERP is the best digital marketing institute in Pune. The trainers deliver thorough practical training on important concepts like SEO, SEM, and social media marketing. The institute offers 100% placement assistance and a supportive learning experience. Highly recommended for a career in digital marketing.",
    image: premImage,
  },
  {
    name: "Yogita Kharpude",
    review:
      "Connecting Dots ERP is one of the best authorized institutes for SAP Training. The training program was well planned. All staff members are very supportive. I am happy by Placement Assistance offered by Delphi. They make sure they provide calls till the candidate is placed which makes them stand different in the market.",
    image: premImage,
  },
];

const FeedbackAndReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container fluid className="feedback-section text-center">
      <h3 className="section-subtitle">Feedbacks & Reviews</h3>
      <Row className="justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <Card className={`feedback-card shadow ${expandedIndex === index ? "expanded" : ""}`}>
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
                    : `${review.review.substring(0, 100)}...`}
                </Card.Text>
                <Button
                  variant="link"
                  className="read-more"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedbackAndReviews;
