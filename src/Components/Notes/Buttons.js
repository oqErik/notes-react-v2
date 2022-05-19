import React, { useContext } from 'react'
import NotesContext from '../../Context/NotesContext'

export default function Buttons() {
  const notesContext = useContext( NotesContext )

  const editNote = () => notesContext.changeEdited( true );
  const newNote = () => notesContext.changeEdited( true );



  return (
    <>
      <button type="button" className="container-fluid btn btn-success btn-lg m-1">New Note</button>
      <button type="button" className="btn btn-secondary btn-lg container-fluid  m-1" onClick={() => editNote()}>Edit Note</button>
      <button type="button" className="btn btn-danger btn-lg container-fluid  m-1">Delete Note</button>
    </>
  )
}
