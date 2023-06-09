import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BsFillGeoAltFill,
  BsFillSendFill,
  BsTelephoneFill,
  BsGlobeCentralSouthAsia,
} from 'react-icons/bs';

function ContactInfo() {
  return (
    <Container>
      <Row>
        <h2>Contact us</h2>
      </Row>
      <Row>
        <p>We're open for any suggestion or just to have a chat</p>
      </Row>
      <Row>
        <Col xs={1}>
          <BsFillGeoAltFill />
        </Col>
        <Col>
          <p>
            <span>Adress:</span>
            Hauptstrasse 22 12345 Oberhausen
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={1}>
          <BsTelephoneFill />
        </Col>
        <Col>
          <p>
            <span>Phone:</span>
            +49 171 8473938
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={1}>
          <BsFillSendFill />
        </Col>
        <Col>
          <p>
            <span>Email:</span>
            info@cookbook.com
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={1}>
          <BsGlobeCentralSouthAsia />
        </Col>
        <Col>
          <p>
            <span>Website:</span>
            cookbook.com
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
