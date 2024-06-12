import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Text } from "../../exportFiles";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <Container className="contact-page">
          <h1 className="contacth1 text-center my-4">
            Have suggestions? We’re all ears! Let’s make great things happen
            togheter! <HiOutlineLightBulb className="contact-icon" />
          </h1>
          <Row>
            <Col className="contact-left" md={6}>
              <h2>Contact Information</h2>
              <p>
                <FaPhone /> Phone: +393179905351
              </p>
              <p>
                <FaEnvelope /> E-mail: 9NineCruiseS@support.com
              </p>
              <p>
                <FaMapMarkerAlt /> Address: Viale Giosuè Carducci, 27, 57122
                Livorno LI, Italy
              </p>
            </Col>
            <Col className="contact-right" md={6}>
              <h2>Send Us a Message</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>E-mail address</Form.Label>
                  <Form.Control type="email" placeholder="E-nter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Button variant="succes" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Text />
    </>
  );
}

export default Contact;
