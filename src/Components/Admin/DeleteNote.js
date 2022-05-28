import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button } from 'react-bootstrap';

export default function DeleteNote() {
  const { selectedNote, deleteNoteAdmin } = useContext( NotesContext );

  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleDelete = () => {
    deleteNoteAdmin( selectedNote._id )
    handleClose()
  };


  return (
    <>
      <Button onClick={handleShow} className="w-100 m-1 btn-danger">Delete</Button>

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
