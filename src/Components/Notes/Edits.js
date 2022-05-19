import React, { useContext, useState } from 'react'
import NotesContext from "../../Context/NotesContext";

export default function Edits() {
  const { selectedNote, saveEditedNote, changeEdited, getNote } = useContext( NotesContext );
  const [ inputs, setInputs ] = useState( selectedNote );

  const handleChange = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs( values => ( { ...values, [ name ]: value } ) )
  }


  const saveNote = () => {
    saveEditedNote( inputs )
    getNote( inputs )
    changeEdited( false )
  }


  return (
    <div className='row'>
      <div className="card">
        <div className="card-body">
          <div className="text-muted">Title:</div>
          <h4 className="card-title">
            <input onChange={handleChange} type="text" className="form-control" name="title" value={inputs.title} />
          </h4>
        </div>
        <hr />
        <div className="card-body">
          <div className="text-muted">Note:</div>
          <p className="card-text">
            <textarea onChange={handleChange} className="form-control" name="description" rows="4" value={inputs.description}></textarea>
          </p>
          <button onClick={saveNote} className='btn btn-success container-fluid'>Save</button>
        </div>
      </div>
    </div>
  )
}
