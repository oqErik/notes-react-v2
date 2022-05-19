import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button, Form } from 'react-bootstrap';

export default function New() {
  const { saveNewNote } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );
  const [ inputs, setInputs ] = useState( {} );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleSave = () => {
    saveNewNote( inputs )
    handleClose()
  };


  return (
    <>
      <button onClick={handleShow} type="button" className="container-fluid btn btn-success btn-lg m-1">New Note</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton >
          <Modal.Title>Create Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="new-note-title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Title"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="new-note-description"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={4}
                placeholder="Description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save New Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
