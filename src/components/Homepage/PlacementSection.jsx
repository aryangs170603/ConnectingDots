import React from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlacementSection.css';
import OurClients from './Ourclients';

const placements = [
  {
    name: 'Ranvijay Singh Rathore',
    course: 'SAP FICO',
    company: 'Microsoft',
    image: 'src/Logos/front11.png',
    companyLogo: 'src/Logos/microsoft.png'
  },
  {
    name: 'Samar Singh',
    course: 'SAP FICO',
    company: 'Cognizant',
    image: 'src/Logos/front3.png',
    companyLogo: 'src/Logos/cognizant.png'
  },
  {
    name: 'Adityanath Gupta',
    course: 'SAP FICO',
    company: 'Amdocs',
    image: 'src/Logos/front4.png',
    companyLogo: 'src/Logos/amdocs.png'
  },
  {
    name: 'Student Four',
    course: 'Digital Marketing',
    company: 'Google',
    image: 'src/Logos/front5.png',
    companyLogo: 'src/Logos/google.png'
  },
  {
    name: 'Student Five',
    course: 'Data Science',
    company: 'Amazon',
    image: 'src/Logos/front6.png',
    companyLogo: 'src/Logos/amazon.png'
  },
  {
    name: 'Student Six',
    course: 'Cyber Security',
    company: 'Meta',
    image: 'src/Logos/front7.png',
    companyLogo: 'src/Logos/meta.png'
  },
  {
    name: 'Student Seven',
    course: 'AI',
    company: 'TCS',
    image: 'src/Logos/front8.png',
    companyLogo: 'src/Logos/tcs.png'
  },
  {
    name: 'Student Eight',
    course: 'IoT',
    company: 'Deloitte',
    image: 'src/Logos/front9.png',
    companyLogo: 'src/Logos/deloitte.png'
  },
  {
    name: 'Student Nine',
    course: 'Blockchain',
    company: 'IBM',
    image: 'src/Logos/front10.png',
    companyLogo: 'src/Logos/ibm.png'
  }
];

const PlacementSection = () => {
  // Function to chunk the placements array into subarrays of length 3
  const chunkArray = (array, chunkSize) => {
    let results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const placementChunks = chunkArray(placements, 3);

  return (
    <Container className="placement-section text-center">
      <h2 className="section-title">OUR STUDENT PLACED AT</h2>
      <Carousel indicators={false} controls={true}>
        {placementChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {chunk.map((student, idx) => (
                <Col key={idx} md={4}>
                  <Card className="placement-card">
                    <Card.Img variant="top" src={student.image} className="student-image" />
                    <Card.Body>
                      <Card.Title>{student.name}</Card.Title>
                      <Card.Text>Trained on - {student.course}</Card.Text>
                      <div>Placed in</div>
                      <img src={student.companyLogo} alt={student.company} className="company-logo" />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          
        ))}
      </Carousel>
      
      
    </Container>
  );
};

export default PlacementSection;
