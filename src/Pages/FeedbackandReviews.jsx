import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import premImage from "../Logos/FeedbackandReviews/review image.png";

const reviews = [
  {
    name: "Tejas Pimple",
    post: "Marketing Manager",
    review:
      "This is the best institute for learning various SAP modules. All the trainers are well experienced and the way of teaching is very good all theory topics are taught from the basics concept and the practice is done on the system server which makes it more easier to learn.100% placement assistance is also provided for every course.",
    image: premImage,
  },
  {
    name: "Dhanashree Gabhane",
    post: "Marketing Manager",
    review:
      "Connecting Dots ERP is the best digital marketing institute in Pune. The trainers deliver thorough practical training on important concepts like SEO, SEM, and social media marketing. The institute offers 100% placement assistance and a supportive learning experience. Highly recommended for a career in digital marketing.",
    image: premImage,
  },
  {
    name: "Yogita Kharpude",
    post: "Marketing Manager",
    review:
      "This is the best institute for learning various SAP modules. All the trainers are well experienced and the way of teaching is very good all theory topics are taught from the basics concept and the practice is done on the system server which makes it more easier to learn.100% placement assistance is also provided for every course.",
    image: premImage,
  },
];

const FeedbackAndReviews = () => {
  return (
    <Container fluid className="feedback-section text-center">
      <h3 className="section-subtitle">Feedbacks & Reviews</h3>
      <Row className="justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <Card className="feedback-card shadow">
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
                <Card.Subtitle className="review-post">
                  {review.post}
                </Card.Subtitle>
                <Card.Text className="review-text">{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedbackAndReviews;
