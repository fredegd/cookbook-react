import React from 'react';
import { Card } from 'react-bootstrap';
import './css/personCard.css';

function PersonCard({ title, body, imgSrc }) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src={`/src/images/${imgSrc}`} />
      <Card.Body className='card-myBody'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
