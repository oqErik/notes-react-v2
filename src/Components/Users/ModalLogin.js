import { Modal, Button, Form, } from 'react-bootstrap';
import React, { useState } from 'react'
import ErrorsAlert from '../../Components/ErrorsAlert';
import Spinner from '../../Components/Spinner'

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


  return (
    <Modal show={show} onHide={handleClose} centered>
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
        <div className='d-flex justify-content-center'>
          {loading && <Spinner />}
        </div>

        <ErrorsAlert errors={errors} loading={loading} />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleLogin( inputs )}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>

  )
}
