import React, { useContext } from 'react'
import NotesContext from "../../Context/NotesContext";

export default function Content() {
  const { selectedNote } = useContext( NotesContext );

  return (
    <>
      <div className="card" >
        <div className="card-body">
          {selectedNote && <div className="text-muted">Title:</div>}
          <h4 className="card-title">
            {selectedNote ? selectedNote.title : 'Hello!'}
          </h4>
        </div>
        <hr />
        <div className="card-body  overflow-auto " style={{ maxHeight: "56vh", minHeight: "56vh" }}>
          {selectedNote && <div className="text-muted ">Note:</div>}
          <p className="card-text " >
            {selectedNote ? selectedNote.description : '<-- You can start by clicking any note on the left side if you dont have any you can start adding a new note  📝'}
          </p>
        </div>
      </div>
    </>
  )
}
