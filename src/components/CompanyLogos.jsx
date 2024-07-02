import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompanyLogos = () => {
  return (
    <Container className="text-center">
      <Row className="my-4">
        <Col>
          <p>Est. 2010 Trusted by +65000 Students</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col><img src="amdocs.png" alt="Amdocs" /></Col>
        <Col><img src="google.png" alt="Google" /></Col>
        <Col><img src="tcs.png" alt="TCS" /></Col>
        <Col><img src="zensar.png" alt="Zensar" /></Col>
      </Row>
    </Container>
  );
};

export default CompanyLogos;
