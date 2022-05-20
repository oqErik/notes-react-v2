import React, { useState, useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import UserContext from "../../Context/User/UserContext";


export default function LogIn() {
  const { login } = useContext( UserContext );
  const [ show, setShow ] = useState( false );
  const [ inputs, setInputs ] = useState( {} );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleClose = () => setShow( false );
  const handleShow = ( event ) => {
    event.preventDefault()
    setShow( true )

  };

  const logIn = () => {
    login( inputs )
    handleClose()
  }

  return (
    <>
      <a href='#!' className='nav-link text-white p-2' onClick={( event ) => {
        handleShow( event )
      }}>
        LogIn
      </a>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log in user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="login-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name='email'
                value={inputs.email || ''}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="login-password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name='password'
                value={inputs.password || ''}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={logIn}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}