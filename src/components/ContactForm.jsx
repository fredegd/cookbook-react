import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <Form>
      <h2>Send us a message</h2>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control type='text' placeholder='Subject' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Control as='textarea' rows={3} placeholder='Message' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
