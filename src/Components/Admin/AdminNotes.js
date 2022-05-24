import React, { useContext, useEffect, useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import NotesContext from "../../Context/NotesContext";

import AllNotes from './AllNotes';

export default function AdminNotes() {
  const { getAllNotesAdmin, searchNotesAdmin, allNotes, loading } = useContext( NotesContext );
  const [ query, setQuery ] = useState( "" )

  useEffect( () => {
    getAllNotesAdmin();
  }, [] )

  const searchNotes = () => searchNotesAdmin( query )


  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if ( e.key === 'Enter' ) {
      e.preventDefault()
      searchNotes()
    }
  };

  const searchBar = ( <Form className="d-flex m-3">
    <FormControl
      type="search"
      placeholder=" Search notes by Title, Description and User"
      className="me-2"
      name='search'
      onKeyPress={( e ) => handleKeypress( e )}
      onChange={event => setQuery( event.target.value )}
    />
    <Button variant="outline-success" onClick={searchNotes}>Search</Button>
  </Form> )

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">ADMIN NOTES</h2>
          {searchBar}
          <div className="list-group">
            <AllNotes allNotes={allNotes} loading={loading} />
          </div>
        </div>
      </div>
    </div >
  )
}
