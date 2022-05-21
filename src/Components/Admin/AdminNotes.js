import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import AllNotes from './AllNotes';

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



  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{ "textAlign": "center" }}>ADMIN NOTES</h1>

          {searchBar}


          <div className="list-group">
            <AllNotes />


          </div>

        </div>

      </div>
    </div >
  )
}
