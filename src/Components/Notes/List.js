import React, { useContext, useEffect } from 'react'
import NotesContext from '../../Context/Notes//NotesContext'

export default function List() {
  const { notes, selectNote, getNotes } = useContext( NotesContext );

  useEffect( () => {
    getNotes();
  }, [] )

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    selectNote( item )
  }

  return (
    <div className="list-group">
      {notes.length ?
        notes.map( ( item ) => {
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
