import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import './css/contact.css';

export default function Contact() {
  return (
    <Container className='my-5'>
      <Row className='contact-container df-flex-md-row justify-content-center mt-2 gap-0'>
        <Col md={4}>
          <ContactForm className=''></ContactForm>
        </Col>
        <Col md={4}>
          <ContactInfo className=''></ContactInfo>
        </Col>
      </Row>
    </Container>
  );
}
