import React, { useContext } from 'react'
import NotesContext from "../../Context/Notes/NotesContext";


export default function Content() {
  const { selectedNote } = useContext( NotesContext );

  return (
    <>
      <div className='row'>
        <div className="card">
          <div className="card-body">
            {selectedNote && <div className="text-muted">Title:</div>}
            <h4 className="card-title">
              {selectedNote ? selectedNote.title : 'Hello!'}
            </h4>
          </div>
          <hr />
          <div className="card-body">
            {selectedNote && <div className="text-muted">Note:</div>}
            <p className="card-text">
              {selectedNote ? selectedNote.description : 'You can start adding a new note if you dont have any 📝'}
            </p>
          </div>
        </div>
      </div>
    </>



  )
}
