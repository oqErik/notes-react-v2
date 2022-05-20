import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

export default function AdminNotes() {




  const searchBar = ( <Form className="d-flex m-3">
    <FormControl
      type="search"
      placeholder=" Search notes by Title, Description or User"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form> )

  const allNotes = ( <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">TITLE</h5>
      <small>DATE</small>
    </div>
    <p class="mb-1">NOTE</p>
    <small>USER</small>
  </a> )

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{ "text-align": "center" }}>ADMIN NOTES</h1>

          {searchBar}


          <div class="list-group">

            {allNotes}
            {allNotes}
            {allNotes}
            {allNotes}
            {allNotes}
            {allNotes}
            {allNotes}
            {allNotes}
          </div>

        </div>

      </div>
    </div >
  )
}
