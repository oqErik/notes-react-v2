import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button } from 'react-bootstrap';
import Spinner from '../Spinner';

export default function Delete( { deletingFromAdmin } ) {

  const { selectedNote, deleteNote, loading, getNotes, getAllNotesAdmin } = useContext( NotesContext );

  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleDelete = async () => {
    await deleteNote( selectedNote._id )
    handleClose()
    deletingFromAdmin ? await getAllNotesAdmin() : await getNotes()
  };

  //
  return (
    <>

      <Button onClick={handleShow} className={deletingFromAdmin ? "container-fluid m-1 btn-danger" : "btn-danger btn-lg container-fluid m-1"}>Delete</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>⚠️ Are you sure you want to delete this note? </Modal.Body>
        {loading && <Spinner />}
        <Modal.Footer>
          <Button disabled={loading} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={loading} variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
