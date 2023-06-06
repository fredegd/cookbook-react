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
    <Container className='text-start px-5 fa-lg'>
      <Row>
        <h2 className=''>Contact us</h2>
      </Row>
      <Row>
        <p>We're open for any suggestion or just to have a chat</p>
      </Row>
      <Row className='my-5'>
        <Col xs={2}>
          <BsFillGeoAltFill size={30} className='' />
        </Col>
        <Col>
          <p>
            <span>Adress:</span>
            Hauptstrasse 22 12345 Oberhausen
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        <Col xs={2}>
          <BsTelephoneFill size={30} />
        </Col>
        <Col>
          <p>
            <span>Phone:</span>
            +49 171 8473938
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        <Col xs={2}>
          <BsFillSendFill size={30} />
        </Col>
        <Col>
          <p>
            <span>Email:</span>
            info@cookbook.com
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        <Col xs={2}>
          <BsGlobeCentralSouthAsia size={30} />
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
