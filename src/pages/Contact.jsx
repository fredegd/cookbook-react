import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import './css/contact.css';

export default function Contact() {
  return (
    <Container>
      <Row className='contact-container df-flex-md-row justify-content-center py-5 gap-0'>
        <Col xs={10} md={5} style={{ padding: 0 }}>
          <ContactForm className=''></ContactForm>
        </Col>
        <Col xs={10} md={5} style={{ padding: 0 }}>
          <ContactInfo className=''></ContactInfo>
        </Col>
      </Row>
    </Container>
  );
}
