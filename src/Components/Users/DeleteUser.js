import React, { useState, useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import { Modal, Button } from 'react-bootstrap';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';

export default function DeleteUser( { deletingFromAdmin, profile } ) {
  const navigate = useNavigate()
  const { selectedUser, deleteUser, loading, getUsersAdmin, logout } = useContext( NotesContext );

  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  const handleDelete = async () => {
    if ( deletingFromAdmin ) {
      await deleteUser( selectedUser._id )
    } else {
      await deleteUser( profile._id )
      logout()
    }
    deletingFromAdmin ? await getUsersAdmin() : navigate( '/' )
    handleClose()
  };

  //
  return (
    <>
      <Button onClick={handleShow} className={deletingFromAdmin ? "container-fluid m-1 btn-danger" : "btn-danger btn-lg container-fluid m-1"}>Delete</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body> {deletingFromAdmin ? '⚠️ Are you sure you want to delete this user?' : '⚠️ Are you sure you want to delete your account?'}</Modal.Body>
        {loading && <Spinner />}
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
