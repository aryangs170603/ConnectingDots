import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile number" />
            </Form.Group>

            <Form.Group controlId="formCourses">
              <Form.Label>Courses</Form.Label>
              <Form.Control as="select">
                <option>SAP</option>
                <option>IT Courses</option>
                <option>Data Visualisation</option>
                <option>Digital Marketing</option>
                <option>HR Courses</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        @media (max-width: 576px) {
          .modal-content {
            margin: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
