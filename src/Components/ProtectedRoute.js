import React from 'react'
import { Link } from 'react-router-dom'
import { ExclamationCircle } from 'react-bootstrap-icons'

export default function ProtectedRoute( { children } ) {

  const homepage = (
    <div className='d-flex align-items-center flex-column'>
      <h1 > <ExclamationCircle className='m-2 small' /> You need to login first! </h1>
      <p><Link to="/">Go back to main page</Link> </p>
    </div> )

  const token = localStorage.getItem( 'token' )
  if ( !token ) return homepage
  return children
}
