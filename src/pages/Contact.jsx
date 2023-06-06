import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <ContactForm></ContactForm>
        </Col>
        <Col>
          <ContactInfo></ContactInfo>
        </Col>
      </Row>
    </Container>
  );
}
