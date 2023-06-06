import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './css/contactForm.css';

function ContactForm() {
  return (
    <Form className='text-start px-5'>
      <h2 className='mb-5'>Send us a message</h2>
      <Form.Group className='my-5' controlId='formBasicEmail'>
        <Form.Control className='form-control' type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group className='my-5' controlId='formBasicEmail'>
        <Form.Control
          className='form-control'
          type='email'
          placeholder='Enter email'
        />
      </Form.Group>

      <Form.Group className='my-5' controlId='formBasicEmail'>
        <Form.Control
          className='form-control'
          type='text'
          placeholder='Subject'
        />
      </Form.Group>

      <Form.Group className='my-5' controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          className='form-control'
          as='textarea'
          rows={3}
          placeholder='Message'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
