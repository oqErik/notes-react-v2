import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/Notes/NotesContext";
import { Modal, Button, Form } from 'react-bootstrap';

export default function Edit() {
  const { updateNote, selectedNote } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );
  const [ inputs, setInputs ] = useState( {} );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleClose = () => setShow( false );

  const handleShow = () => {
    setInputs( selectedNote )
    setShow( true )
  };

  const handleSave = () => {
    updateNote( inputs )
    handleClose()
  };

  return (
    <>
      <button onClick={handleShow} type="button" className="container-fluid btn btn-secondary btn-lg m-1">Edit</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="edit-note-title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Title"
                autoFocus
                onChange={handleChange}
                value={inputs.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="edit-note-description"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={4}
                placeholder="Description"
                onChange={handleChange}
                value={inputs.description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
