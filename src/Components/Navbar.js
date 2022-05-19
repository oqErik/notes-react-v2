import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark ">
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-white" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#!">User</a>
        </li>
      </ul>
    </nav>
  )
}
