import React, { useContext, useEffect } from 'react'
import NotesContext from '../../Context/NotesContext'

export default function List() {
  const notesContext = useContext( NotesContext );

  useEffect( () => {
    notesContext.getNotes();
  }, [] )

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    notesContext.changeEdited( false )
    notesContext.getNote( item )
  }

  return (
    <div className="list-group">
      {notesContext.notes.length ?
        notesContext.notes.map( ( item ) => {
          return (
            <a onClick={( event ) => hadleClick( event, item )}
              key={item._id}
              href="#!"
              className="list-group-item list-group-item-action text-truncate" > {item.title}</a>
          )
        } )
        : <div> No notes! 😔 </div>}
    </div >
  )
}
