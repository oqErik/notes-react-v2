import React, { useState } from 'react'
import { Modal, Button, Form, Card, } from 'react-bootstrap';
import ErrorsAlert from '../../Components/ErrorsAlert';
import Spinner from '../../Components/Spinner'
export default function EditUser( { editingFromAdmin } ) {


  const [ inputs, setInputs ] = useState( { admin: false } );
  const [ show, setShow ] = useState( false );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    if ( name === 'admin' ) return setInputs( values => ( { ...values, admin: !values.admin } ) )
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleKeypress = async e => {
    if ( e.key === 'Enter' ) {
      e.preventDefault()
      handleUpdateUser( inputs )
    }
  }

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleUpdateUser = async () => {
    console.log( 'check data' );
    console.log( inputs );

  }
  return (
    <>
      <Button onClick={handleShow} className={editingFromAdmin ? "container-fluid m-1 btn-secondary" : "btn-secondary btn-lg container-fluid m-1"}>Edit</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editUser-name">
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
            <Form.Group className="mb-3" controlId="editUser-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled
                required
                type="email"
                placeholder="name@example.com"
                name='email'
                value={inputs.email || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
              />
              <Form.Text className="text-muted">
                You cannot change email ⚠️
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser-password">
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
            <Form.Group className="mb-3 " controlId="editUser-img">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RPHpg6g4KBhrfe9u3SC59gHaEo%26pid%3DApi&f=1"
                name='img'
                value={inputs.img || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
              />
            </Form.Group>


            <>
              {/* <Form.Label>Admin</Form.Label>
              <Card body border="danger" >
                <Form.Group className='d-flex justify-content-between'  >
                  <Form.Label className='text-danger'>Grant this user admin perms</Form.Label>
                  <Form.Switch name="admin" id="admin" onChange={handleChange} checked={inputs.admin} />
                </Form.Group>
              </Card> */}
              <Form.Label>Admin</Form.Label>
              <Card body border="danger" >
                <Form.Label className='text-danger'>Grant this user admin perms</Form.Label>
                <Form.Select aria-label="admin" name="admin" onChange={handleChange}                >
                  <option value={false}>No</option>
                  <option className='text-danger ' value={true}>Yes</option>
                </Form.Select>
              </Card>
            </>

          </Form>
          {/*  <div className='d-flex justify-content-center'>
            {loading && <Spinner />}
          </div>

          <ErrorsAlert errors={errors} loading={loading} /> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => handleUpdateUser( inputs )}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    </>
  )
}
