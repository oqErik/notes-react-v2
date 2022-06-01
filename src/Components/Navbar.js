import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";

import { Navbar as NavbarBoostrap, Container, Nav, NavDropdown } from 'react-bootstrap';
import { CardHeading, PersonSquare, BookmarkStarFill } from 'react-bootstrap-icons';
import NotesContext from "../Context/NotesContext";


import LogIn from './Users/LogIn';
import Logout from './Users/Logout';
import AddUser from './Users/AddUser';
import Spinner from './Spinner';


export default function Navbar() {
  const [ show, setShow ] = useState( false )
  const [ showProfile, setShowProfile ] = useState( false )

  const handleShow = () => {
    setShow( ( show ) => !show )
  }
  const handleShowProfile = () => {
    setShowProfile( ( showProfile ) => !showProfile )
  }

  const { token, isAdmin, profile } = useContext( NotesContext );
  const adminSection = (
    <NavDropdown
      id="admin-dropdown"
      title={( <><BookmarkStarFill size="1.2rem" /> <span>Admin Section</span></> )}
      menuVariant="dark"
      show={show}
      onClick={handleShow}>
      <Link to="/admin/users" className='dropdown-item'>Users section</Link>
      <Link to="/admin/notes" className='dropdown-item'>Notes section</Link>
    </NavDropdown>
  )

  const profileSection = (
    <NavDropdown
      id="profile-dropdown"
      title={( <><span>{profile ? profile.name : <Spinner />}</span></> )}
      menuVariant="dark"
      show={showProfile}
      onClick={handleShowProfile}

      className='me-3'>
      <Link to="/profile" className='dropdown-item'><PersonSquare /> Profile</Link>
      <NavDropdown.Divider />
      <Logout />
    </NavDropdown>
  )

  return (
    <NavbarBoostrap variant="dark" bg="dark" expand="lg ">
      <Container >
        <NavbarBoostrap.Brand><Link className="nav-link" to="/">Notes React App</Link> </NavbarBoostrap.Brand>
        <NavbarBoostrap.Toggle />
        <NavbarBoostrap.Collapse id="main-navbar">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {isAdmin && adminSection}
            {token && <Link to="/notes" className="nav-link text-white"><CardHeading /> My Notes</Link>}
            {!token && <AddUser />}
            {!token ? <LogIn /> : profileSection}
          </Nav>
        </NavbarBoostrap.Collapse>
      </Container>
    </NavbarBoostrap >
  )
}
