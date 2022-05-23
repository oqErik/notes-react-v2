import React from 'react'
import { Accordion, Button, Spinner } from 'react-bootstrap';

export default function AllNotes( { allNotes, loading } ) {
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

  const notesList = <><h4>Total: {allNotes.total}</h4>
    <Accordion>
      {allNotes.notes?.length ?
        allNotes.notes.map( ( item, pos ) => {
          return (
            <Accordion.Item eventKey={pos} key={item._id}>
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
                  <Button className="w-100 m-1 btn-dark">Edit</Button>
                  <Button className="w-100 m-1 btn-danger">Delete</Button>
                </span>
              </Accordion.Body>
            </Accordion.Item>
          )
        }
        ) : <div>No notes</div>}
    </Accordion></>

  return (
    <>
      {loading ? spinner : notesList}
    </>
  )
}
