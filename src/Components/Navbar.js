import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <Link to="/" className="navbar-brand">Home</Link>
      <div className='d-flex'>
        <Link to="/notes" className="nav-link text-white p-2">Notes</Link>
        <Link to="/login" className="nav-link text-white p-2">Login</Link>
      </div>



    </nav>
  )
}
