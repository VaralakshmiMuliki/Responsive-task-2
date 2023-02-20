import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.scss";

export const ContactUs = () => {
  return (
    <Container className='contact-bg'>
      <Row>
        <Col xs="12" md="12" lg="6" className="contact-us-container">
          <h1>
            <span>Contact Us</span> to receive any further information
          </h1>
        </Col>
        <Col xs="12" md="12" lg="6" className="contact-btn-container">
            <button className="contact-btn">Contact Us</button>
        </Col>
      </Row>
    </Container>
  );
};
