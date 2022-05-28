import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button, Form } from 'react-bootstrap';
import ErrorsAlert from '../ErrorsAlert'
import Spinner from '../../Components/Spinner'

export default function Edit( { editingFromAdmin } ) {
  const { updateNote, selectedNote, loading, errors, getAllNotesAdmin, getNotes } = useContext( NotesContext );
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

  const handleSave = async () => {
    const err = await updateNote( inputs )
    if ( err?.length === 0 ) {
      setInputs( {} )
      handleClose()
      editingFromAdmin ? await getAllNotesAdmin() : await getNotes()
    }
  };

  return (
    <>
      <Button onClick={handleShow} className={editingFromAdmin ? "container-fluid m-1 btn-secondary" : "btn-secondary btn-lg container-fluid m-1"}>Edit</Button>

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
          <div className='d-flex justify-content-center'>
            {loading && <Spinner />}
          </div>

          <ErrorsAlert errors={errors} loading={loading} />
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
