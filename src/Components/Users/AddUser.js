import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PersonPlus } from 'react-bootstrap-icons';
import { Modal, Button, Form, } from 'react-bootstrap';

import NotesContext from "../../Context/NotesContext";
import ErrorsAlert from '../../Components/ErrorsAlert';
import Spinner from '../../Components/Spinner'

export default function AddUser() {
  const [ inputs, setInputs ] = useState( {} );
  const navigate = useNavigate()
  const { addUser, errors, loading } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleKeypress = async e => {
    if ( e.key === 'Enter' ) {
      e.preventDefault()
      handleCreteUser( inputs )
    }
  }

  const handleClose = () => setShow( false );
  const handleShow = ( event ) => {
    event.preventDefault()
    setShow( true )
  };

  const handleCreteUser = async ( inputs ) => {
    const error = await addUser( inputs )
    if ( !loading && error?.length === 0 ) {
      navigate( "/notes" )
      handleClose()
    }
  }

  return (
    <>
      <Link className='nav-link text-white'
        to='#!'
        onClick={handleShow}>
        <PersonPlus size="1.2rem" /> Add User
      </Link>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addUser-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Jhon M."
                name='name'
                value={inputs.name || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addUser-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                name='email'
                value={inputs.email || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
              />
              <Form.Text className="text-muted">
                You cannot edit your email later on ⚠️
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addUser-password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name='password'
                placeholder="•••••"
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
          <Button disabled={loading} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={loading} variant="primary" onClick={() => handleCreteUser( inputs )}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
