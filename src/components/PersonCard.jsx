import { Card } from 'react-bootstrap';
import { cls } from "../colors";
import './css/personCard.css';

function PersonCard({ title, body, imgSrc }) {

  return (
    <Card className='my-3' style={{ width: '20rem' }}>
      <Card.Img variant='top' className='mt-4' src={imgSrc} />
      <Card.Body className='card-myBody'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
