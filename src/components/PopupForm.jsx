import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(true);
    }, 40000); // 45000ms = 45 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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

            <Form.Group controlId="formEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formCourses">
              <Form.Label>Courses</Form.Label>
              <Form.Control as="select">
                <option>Course 1</option>
                <option>Course 2</option>
                <option>Course 3</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupForm;
