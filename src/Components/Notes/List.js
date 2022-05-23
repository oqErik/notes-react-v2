import React, { useContext, useEffect } from 'react'
import NotesContext from '../../Context/Notes/NotesContext'
import { Button, Spinner } from 'react-bootstrap';


export default function List() {
  const { notes, selectNote, getNotes, loading } = useContext( NotesContext );

  useEffect( () => {
    getNotes();
  }, [] )

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    selectNote( item )
  }
  const spinner =
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="border"
        size="xl"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  return ( loading ? spinner :
    <div className="list-group overflow-auto" style={{ height: "80vh" }}>
      <div className="list-group-item disabled list-group-item-action text-truncate  " style={{ minHeight: "2.5rem " }}  > Notes :</div>
      {notes.length ?
        notes.map( ( item ) => {
          return (
            <a onClick={( event ) => hadleClick( event, item )}
              key={item._id}
              href="#!"
              className="list-group-item list-group-item-action text-truncate " style={{ minHeight: "2.5rem " }} > {item.title}</a>
          )
        } )
        : <div className="list-group-item disabled list-group-item-action text-truncate  " style={{ minHeight: "2.5rem " }} > No notes! 😔 </div>}
    </div >
  )
}
