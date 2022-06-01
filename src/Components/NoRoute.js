import React from 'react'
import { Link } from 'react-router-dom'
import { ExclamationCircle } from 'react-bootstrap-icons'

export default function NoRoute() {
  return (
    <div className='d-flex align-items-center flex-column'>
      <h1><ExclamationCircle className='m-2 small' /> 404 Page not found </h1>
      <p><Link to="/">Go back to main page</Link> </p>
    </div>
  )
}
