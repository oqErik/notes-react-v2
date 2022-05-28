import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NotesContext from "../../Context/NotesContext";
import { PersonSquare } from 'react-bootstrap-icons';
import ModalLogin from './ModalLogin'

export default function LogIn() {
  const navigate = useNavigate()

  const { login, errors, loading } = useContext( NotesContext );
  const [ show, setShow ] = useState( false );

  const handleClose = () => setShow( false );
  const handleShow = ( event ) => {
    event.preventDefault()
    setShow( true )
  };

  const handleLogin = async ( inputs ) => {
    const error = await login( inputs )
    if ( !loading && error?.length === 0 ) navigate( "/notes" )
  }

  return (
    <>
      <Link className='nav-link text-white'
        to='#!'
        onClick={handleShow}>
        <PersonSquare size="1.2rem" /> LogIn
      </Link>

      <ModalLogin loading={loading} handleClose={handleClose} handleLogin={handleLogin} show={show} errors={errors} />
    </>
  );

}
