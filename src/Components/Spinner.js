import React from 'react'
import { Button, Spinner as SpinnerBootstrap } from 'react-bootstrap';

export default function Spinner() {
  return (
    <Button variant="primary" className='container-fluid ' disabled>
      <SpinnerBootstrap
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  )
}
