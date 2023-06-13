import { Container, Row } from 'react-bootstrap';
import PersonCard from '../components/PersonCard';

export default function About() {
  const elvis =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sequi sit asperiores dolor nam vel, porro nihil odio. Rerum, enim!Lorem ipsum, dolor sit amet consectetur adipisicing elit';
  return (
    <Container fluid>
      <Row className='person-container df-flex-md-row justify-content-center gap-5 my-5'>
        <PersonCard title='Elvis B' body={elvis} imgSrc='elvisB.png' />
        <PersonCard title='Anne P' body={elvis} imgSrc='anneP.png' />
        <PersonCard title='Fred ' body={elvis} imgSrc='fred.jpg' />
      </Row>
    </Container>
  );
}
