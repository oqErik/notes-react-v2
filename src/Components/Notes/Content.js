import React, { useContext } from 'react'
import NotesContext from "../../Context/NotesContext";
import Edits from './Edits'
import New from './New'
import Delete from './Delete'

export default function Content() {
  const { selectedNote, edited } = useContext( NotesContext );

  return (
    <>
      {edited ?
        <Edits /> :
        <div className='row'>
          <div className="card">
            <div className="card-body">
              <div className="text-muted">Title:</div>
              <h4 className="card-title">
                {selectedNote ? selectedNote.title : 'Hello!'}
              </h4>
            </div>
            <hr />
            <div className="card-body">
              <div className="text-muted">Note:</div>
              <p className="card-text">
                {selectedNote ? selectedNote.description : 'You can start adding a new note if you dont have any 📝'}
              </p>
            </div>
          </div>
        </div>
      }
      <New></New>
      <Delete></Delete>
    </>



  )
}
