import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import NotesContext from "../../Context/NotesContext";
import { PersonSquare } from 'react-bootstrap-icons';
import ModalLogin from './ModalLogin'
export default function LogIn() {
  const { login, errors, loading } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = ( event ) => {
    event.preventDefault()
    setShow( true )
  };

  const handleLogin = async ( inputs ) => {
    await login( inputs )
  }

  return (
    <>
      <Link className='nav-link text-white' to='#!' onClick={( event ) => {
        handleShow( event )
      }}><PersonSquare size="1.2rem" /> LogIn</Link>

      <ModalLogin loading={loading} handleClose={handleClose} handleLogin={handleLogin} show={show} errors={errors} />
    </>
  );

}
