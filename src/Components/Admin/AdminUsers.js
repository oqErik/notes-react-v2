import React, { useContext, useEffect, useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import NotesContext from "../../Context/NotesContext";

import AllUsers from './AllUsers';

export default function AdminUsers() {
  const { getUsersAdmin, searchUsersAdmin, allUsers, loading } = useContext( NotesContext );
  const [ query, setQuery ] = useState( "" )
  useEffect( () => {
    getUsersAdmin();
    // eslint-disable-next-line
  }, [] )

  const searchUsers = () => searchUsersAdmin( query )

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if ( e.key === 'Enter' ) {
      e.preventDefault()
      searchUsers()
    }
  };

  const searchBar = ( <Form className="d-flex m-3">
    <FormControl
      type="search"
      placeholder=" Search users by Name, Email and Role"
      className="me-2"
      name='search'
      onKeyPress={( e ) => handleKeypress( e )}
      onChange={event => setQuery( event.target.value )}
    />
    <Button variant="success" onClick={searchUsers}>Search</Button>
  </Form> )

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">ALL USERS</h2>
          {searchBar}
          <div className="list-group">
            <AllUsers allUsers={allUsers} loading={loading} />
          </div>
        </div>
      </div>
    </div >
  )
}
