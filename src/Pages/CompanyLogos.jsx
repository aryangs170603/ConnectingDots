import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import amdocs from '../Logos/Companylogos/amdocs.png';
import google from '../Logos/Companylogos/google.png';
import tcs from '../Logos/Companylogos/tcs.png';
import zenzar from '../Logos/Companylogos/zensar.png';
const CompanyLogos = () => {
  return (
    <Container className="text-center">
      <Row className="my-4">
        <Col>
          <p>Est. 2010 Trusted by +65000 Students</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col><img src={amdocs} alt="Amdocs" /></Col>
        <Col><img src={google} alt="Google" /></Col>
        <Col><img src={tcs} alt="TCS" /></Col>
        <Col><img src={zenzar} alt="Zensar" /></Col>
      </Row>
    </Container>
  );
};

export default CompanyLogos;
