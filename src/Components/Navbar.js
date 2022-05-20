import React from 'react'
import { Link } from "react-router-dom";
import LogIn from './Users/LogIn';
//check if logged in
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <Link to="/" className="navbar-brand p-2">Home</Link>
      <div className='d-flex'>
        <Link to="/notes" className="nav-link text-white p-2">Notes</Link>


        <LogIn></LogIn>
        {/* <Link to="/login" className="nav-link text-white p-2">Login</Link> */}
      </div>
    </nav>
  )
}
