import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import UserContext from "../Context/User/UserContext";
import { Navbar as NavbarBoostrap, Container, Nav, NavDropdown } from 'react-bootstrap';

import LogIn from './Users/LogIn';
import Logout from './Users/Logout';

export default function Navbar() {
  const { user } = useContext( UserContext );

  const adminSection = (
    <NavDropdown
      id="admin-dropdown"
      title="Admin Section"
      menuVariant="dark"
    >
      <Link to="/admin/users" className='dropdown-item'>Users section</Link>
      <Link to="/admin/notes" className='dropdown-item'>Notes section</Link>
    </NavDropdown>
  )

  return (
    <NavbarBoostrap variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <NavbarBoostrap.Brand><Link className="nav-link" to="/">Notes React App</Link> </NavbarBoostrap.Brand>
        <NavbarBoostrap.Toggle />
        <NavbarBoostrap.Collapse id="main-navbar">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {user?.admin && adminSection}
            {user && <Link to="/notes" className="nav-link text-white">My Notes</Link>}
            {!user ? <LogIn /> : <Logout />}
          </Nav>
        </NavbarBoostrap.Collapse>
      </Container>
    </NavbarBoostrap>
  )
}
