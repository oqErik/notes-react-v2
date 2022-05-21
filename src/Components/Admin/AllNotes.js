import React, { useContext, useEffect, useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import NotesContext from "../../Context/Notes/NotesContext";
import axios from 'axios'
export default function AllNotes() {



  const [ notes, setNotes ] = useState( [] )
  const getNotes = async () => {
    try {
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/notes/`,
        { headers: { token: localStorage.getItem( 'token' ) } }
      )
      setNotes( res.data )
      console.log( res.data );
    } catch ( error ) {
      console.error( error );
    }
  }

  useEffect( () => {
    getNotes()
  }, [] )


  return (


    notes.map( ( item ) => {
      return (
        <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{item.title}</h5>
            <small>{item.date}</small>
          </div>
          <p className="mb-1">{item.description}</p>
          <small>sas</small>
        </a> )
    }





    )
  )
}
