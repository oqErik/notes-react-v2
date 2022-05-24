import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button } from 'react-bootstrap';

export default function Delete() {

  const { selectedNote, deleteNote } = useContext( NotesContext );

  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleDelete = () => {
    deleteNote( selectedNote._id )
    handleClose()
  };


  return (
    <>
      <button onClick={handleShow} type="button" className="btn btn-danger btn-lg container-fluid  m-1">Delete Note</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>⚠️ Are you sure you want to delete this note? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
