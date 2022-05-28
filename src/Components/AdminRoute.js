import React from 'react'
import { Link } from 'react-router-dom'
import { ExclamationCircle } from 'react-bootstrap-icons'

export default function AdminRoute( { children } ) {
  const homepage = (
    <div className='d-flex align-items-center flex-column'>
      <h1 > <ExclamationCircle className='m-2 small' /> You are not an admin! </h1>
      <p><Link to="/">Go back to main page</Link> </p>
    </div> )

  const admin = localStorage.getItem( 'isAdmin' ) === 'true' ? true : false
  if ( !admin ) return homepage
  return children
}
