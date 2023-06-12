import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './css/contactForm.css';

function ContactForm() {
  return (
    <Form className='contactForm text-start p-5'>
      <h2 className='mb-5'>Send us a message</h2>
      <Form.Group className='my-4' controlId='formBasicEmail'>
        <Form.Control className='' type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group className='my-4' controlId='formBasicEmail'>
        <Form.Control className='' type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='my-4' controlId='formBasicEmail'>
        <Form.Control className='' type='text' placeholder='Subject' />
      </Form.Group>

      <Form.Group className='my-4' controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          className=''
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
