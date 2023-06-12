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
  const iconSize = 28;
  return (
    <Container className='contactInfo-container text-start mt-5  p-5 fa-lg'>
      <Row>
        <h2 className=''>Contact us</h2>
      </Row>
      <Row className='pt-5 pb-3'>
        We're open for any suggestion or just to have a chat
      </Row>
      <Row className=''>
        <Col className='center-icon' style={{ padding: 0 }} xs={2}>
          <BsFillGeoAltFill size={iconSize} />
        </Col>
        <Col>
          <span>Adress: </span>
          Hauptstrasse 22 12345 Oberhausen
        </Col>
      </Row>

      <Row className='pt-5'>
        <Col className='center-icon' style={{ padding: 0 }} xs={2}>
          <BsTelephoneFill size={iconSize} />
        </Col>
        <Col>
          <span>Phone: </span>
          +49 171 8473938
        </Col>
      </Row>

      <Row className='pt-5 flex-nowrap'>
        <Col className='center-icon' style={{ padding: 0 }} xs={2}>
          <BsFillSendFill size={iconSize} />
        </Col>
        <Col>
          <span>Email: </span>
          info@cookbook.com
        </Col>
      </Row>

      <Row className='pt-5'>
        <Col className='center-icon' style={{ padding: 0 }} xs={2}>
          <BsGlobeCentralSouthAsia size={iconSize} />
        </Col>
        <Col>
          <span>Website: </span>
          cookbook.com
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
