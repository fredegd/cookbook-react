import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BsFillGeoAltFill,
  BsFillSendFill,
  BsTelephoneFill,
  BsGlobeCentralSouthAsia,
} from 'react-icons/bs';
import './css/contactInfo.css';

function ContactInfo() {
  return (
    <Container className='contactInfo-container text-start p-5 fa-lg'>
      <Row>
        <h2 className=''>Contact us</h2>
      </Row>
      <Row className='pt-5 pb-4'>
        <p>We're open for any suggestion or just to have a chat</p>
      </Row>
      <Row className=''>
        <Col className='bla' style={{ padding: 0 }} xs={2}>
          <BsFillGeoAltFill />
        </Col>
        <Col>
          <p>
            <span>Adress: </span>
            Hauptstrasse 22 12345 Oberhausen
          </p>
        </Col>
      </Row>

      <Row className='pt-4'>
        <Col style={{ padding: 0 }} xs={2}>
          <BsTelephoneFill size={30} />
        </Col>
        <Col>
          <p>
            <span>Phone: </span>
            +49 171 8473938
          </p>
        </Col>
      </Row>

      <Row className='pt-4'>
        <Col xs={2}>
          <BsFillSendFill size={30} />
        </Col>
        <Col>
          <p>
            <span>Email: </span>
            info@cookbook.com
          </p>
        </Col>
      </Row>

      <Row className='pt-4'>
        <Col xs={2}>
          <BsGlobeCentralSouthAsia size={30} />
        </Col>
        <Col>
          <p>
            <span>Website: </span>
            cookbook.com
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
