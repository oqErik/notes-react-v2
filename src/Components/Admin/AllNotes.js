import React, { useContext } from 'react'
import { Accordion, } from 'react-bootstrap';
import Spinner from '../Spinner';
import Delete from '../Notes/Delete';
import NotesContext from '../../Context/NotesContext'
import Edit from '../Notes/Edit';

export default function AllNotes( { allNotes, loading } ) {
  const { selectNote } = useContext( NotesContext );

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    selectNote( item )
  }

  const notesList = <><h4>Total: {allNotes.total ? allNotes.total : '0'}</h4>
    <Accordion>
      {allNotes.notes?.length ?
        allNotes.notes.map( ( item, pos ) => {
          return (
            <Accordion.Item eventKey={pos} key={item._id} onClick={( event ) => hadleClick( event, item )}>
              <Accordion.Header >
                <div className="flex-column align-items-start rounded-3 text-truncate" >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.title}</h5>
                    <strong> <small>Created: {item.createdAt.split( 'T' )[ 0 ]}</small></strong>
                  </div>
                  <p className="mb-1 ">{item.description}</p>
                  <small>{item.user.name}  -  {item.user.email}</small>
                </div>
              </Accordion.Header>
              <Accordion.Body >
                {item.description}
                <span className="d-flex w-100 justify-content-center ">
                  <Edit editingFromAdmin={true} />
                  <Delete deletingFromAdmin={true} />
                </span>
              </Accordion.Body>
            </Accordion.Item>
          )
        }
        ) : <div>No notes</div>}
    </Accordion></>

  return (
    <>
      {loading ? <Spinner /> : notesList}
    </>
  )
}
