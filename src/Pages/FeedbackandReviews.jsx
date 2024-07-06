import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import premImage from "../Logos/FeedbackandReviews/review image.png";

const reviews = [
  {
    name: "Roger Scott",
    post: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: premImage,
  },
  {
    name: "Roger Scott",
    post: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: premImage,
  },
  {
    name: "Roger Scott",
    post: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
