import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { Navbar as NavbarBoostrap, Container, Nav, NavDropdown } from 'react-bootstrap';
import { CardHeading, BookmarkStarFill } from 'react-bootstrap-icons';
import UserContext from "../Context/User/UserContext";


import LogIn from './Users/LogIn';
import Logout from './Users/Logout';

export default function Navbar() {
  const { token, isAdmin } = useContext( UserContext );

  const adminSection = (
    <NavDropdown
      id="admin-dropdown"
      title={( <><BookmarkStarFill size="1.2rem" /> <span>Admin Section</span></> )}
      menuVariant="dark"    >
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
            {isAdmin && adminSection}
            {token ? <Link to="/notes" className="nav-link text-white"><CardHeading /> My Notes</Link> : null}
            {!token ? <LogIn /> : <Logout />}
          </Nav>
        </NavbarBoostrap.Collapse>
      </Container>
    </NavbarBoostrap >
  )
}
