import React, { useState, useContext } from 'react'
import { Modal, Button, Form, Card, } from 'react-bootstrap';
import ErrorsAlert from '../../Components/ErrorsAlert';
import NotesContext from "../../Context/NotesContext";
import Spinner from '../../Components/Spinner'

export default function EditUser( { editingFromAdmin, profile } ) {
  const { editUser, errors, loading } = useContext( NotesContext );
  const [ inputs, setInputs ] = useState( { admin: false } );
  const [ show, setShow ] = useState( false );
  const [ switchPass, setSwitchPass ] = useState( false );

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
  const handleShow = () => {
    setShow( true );
    setInputs( profile )
  }

  const handleUpdateUser = async () => {
    const err = await editUser( inputs, switchPass )
    if ( !err ) handleClose()
  }

  const handleSwitch = () => {
    setSwitchPass( ( oldVal ) => !oldVal )
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

            <Form.Group className="mb-3 " controlId="editUser-img">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                type="text"
                name='img'
                value={inputs.img || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser-password">
              <Form.Switch name="passwordswitch" id="passwordswitch" label="Change Password" checked={switchPass} onChange={handleSwitch} />
              <Form.Control
                disabled={!switchPass ? true : false}
                required
                type="password"
                name='password'
                value={inputs.password || ''}
                onChange={handleChange}
                onKeyPress={( e ) => handleKeypress( e )}
              />
            </Form.Group>
            {/* <Form.Label>Admin</Form.Label>
              <Card body border="danger" >
                <Form.Group className='d-flex justify-content-between'  >
                  <Form.Label className='text-danger'>Grant this user admin perms</Form.Label>
                  <Form.Switch name="admin" id="admin" onChange={handleChange} checked={inputs.admin} />
                </Form.Group>
              </Card> */}
            {editingFromAdmin &&
              <><Form.Label>Admin</Form.Label>
                <Card body border="danger" >
                  <Form.Label className='text-danger'>Grant this user admin perms</Form.Label>
                  <Form.Select aria-label="admin" name="admin" onChange={handleChange}                >
                    <option value={false}>No</option>
                    <option className='text-danger ' value={true}>Yes</option>
                  </Form.Select>
                </Card></>}
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
          <Button variant="success" onClick={() => handleUpdateUser( inputs )}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    </>
  )
}
