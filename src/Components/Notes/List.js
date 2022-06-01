import React, { useContext, useEffect, } from 'react'
import NotesContext from '../../Context/NotesContext'
import Spinner from '../../Components/Spinner'

export default function List() {
  const { selectNote, notes, getNotes, loading } = useContext( NotesContext );

  useEffect( () => {
    getNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    selectNote( item )
  }

  return ( loading ? <Spinner /> :
    <div className="list-group overflow-auto " style={{ height: "80vh" }}>
      <div className="list-group-item disabled list-group-item-action text-truncate  " variant="flush" style={{ minHeight: "2.5rem " }}  > Notes :</div>
      {notes?.length ?
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
