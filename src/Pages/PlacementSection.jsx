import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlacementSection.css';

import companyLogo from '../Logos/Placementsection/amazon.png';
import faceImage1 from '../Logos/Placementsection/front4.png';
import faceImage2 from '../Logos/Placementsection/front5.png';
import faceImage3 from '../Logos/Placementsection/front6.png';
import faceImage4 from '../Logos/Placementsection/front7.png';
import faceImage5 from '../Logos/Placementsection/front8.png';
import faceImage6 from '../Logos/Placementsection/front9.png';
import faceImage7 from '../Logos/Placementsection/front10.png';
import faceImage8 from '../Logos/Placementsection/front11.png';

const placementStories = [
  { name: 'Prathamesh', degree: 'BCA Graduate', company: 'Apptware', logo: companyLogo, topImage: faceImage1 },
  { name: 'Nikhlesh', degree: 'B.Tech Electrical', company: 'Nerve Solutions', logo: companyLogo, topImage: faceImage2 },
  { name: 'Sukanya', degree: 'B.Tech CSE', company: 'Napasoft', logo: companyLogo, topImage: faceImage3 },
  { name: 'Abhishek', degree: 'B.Tech Civil', company: 'Reward360', logo: companyLogo, topImage: faceImage4 },
  { name: 'Sukanya', degree: 'B.Tech CSE', company: 'Napasoft', logo: companyLogo, topImage: faceImage8 },
  { name: 'Prathamesh', degree: 'BCA Graduate', company: 'Apptware', logo: companyLogo, topImage: faceImage5 },
  { name: 'Prathamesh', degree: 'BCA Graduate', company: 'Apptware', logo: companyLogo, topImage: faceImage6 },
  { name: 'Abhishek', degree: 'B.Tech Civil', company: 'Reward360', logo: companyLogo, topImage: faceImage7 },
];

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, size + i));
  }
  return chunked;
};

const PlacementSection = () => {
  const chunkedStories = chunkArray(placementStories, 3);

  return (
    <Container fluid className="placement-section">
      <h2 className="section-title">PLACEMENT SECTION</h2>
      <Carousel indicators={false}>
        {chunkedStories.map((storyChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `student-placement-card card-${index * 8 + storyIndex}`;
                return (
                  <Col key={storyIndex} md={3}>
                    <Card className={cardClassName}>
                      <Card.Img variant="top" src={story.topImage} className="top-image" />
                      <Card.Body>
                        <Card.Title>{story.name}</Card.Title>
                        <Card.Text>
                          <p>{story.degree}</p>
                          <p>{story.company}</p>
                          <p><img src={story.logo} alt={story.company} className="company-icon" /></p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default PlacementSection;
