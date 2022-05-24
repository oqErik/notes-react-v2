import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import React, { useState } from 'react'

export default function ModalLogin( { errors, show, handleLogin, handleClose, loading } ) {
  const [ inputs, setInputs ] = useState( {} );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleKeypress = async e => {
    if ( e.key === 'Enter' ) {
      e.preventDefault()
      handleLogin( inputs )
    }
  }

  const spinner =
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>


  return (
    <>  <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Log in user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="login-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
              onKeyPress={( e ) => handleKeypress( e )}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="login-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name='password'
              value={inputs.password || ''}
              onChange={handleChange}
              onKeyPress={( e ) => handleKeypress( e )}
            />
          </Form.Group>
        </Form>

        <div className='d-flex justify-content-center'>  {loading && spinner}</div>



        {errors?.length > 0 && !loading ? errors.map( ( item, pos ) => {
          return ( <Alert key={pos} variant="danger">
            {item.msg}
          </Alert> )
        } ) : null}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleLogin( inputs )}>
          Login
        </Button>
      </Modal.Footer>
    </Modal></>

  )
}
