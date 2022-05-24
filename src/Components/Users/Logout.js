import React, { useState, useContext } from 'react'

import { Modal, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import { PersonSquare } from 'react-bootstrap-icons';
import NotesContext from "../../Context/NotesContext";


export default function Logout() {
  const navigate = useNavigate();
  const { clearNotes, logout } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = ( event ) => {
    event.preventDefault()
    setShow( true )
  };

  const handleLogut = () => {
    logout()
    clearNotes()
    handleClose()
    navigate( "/" )
  };


  return (
    <>
      <Link className='nav-link' to='#!' onClick={( event ) => {
        handleShow( event )
      }}><PersonSquare size="1.2rem" /> Logout</Link>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Loggin out</Modal.Title>
        </Modal.Header>
        <Modal.Body>⚠️ Are you sure you want to logout? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleLogut}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
