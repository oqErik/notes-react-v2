import React, { useContext } from 'react'
import { Accordion, } from 'react-bootstrap';
import Spinner from '../Spinner';
import Delete from '../Notes/Delete';
import NotesContext from '../../Context/NotesContext'
import Edit from '../Notes/Edit';
import AdminUsers from './AdminUsers';
import EditUser from '../Users/EditUser';
import DeleteUser from '../Users/DeleteUser';

export default function AllUsers( { allUsers, loading } ) {
  const { selectUser } = useContext( NotesContext );

  const hadleClick = ( event, item ) => {
    event.preventDefault()
    selectUser( item )
  }

  const notesList = <><h4>Total: {allUsers.total ? allUsers.total : '0'}</h4>
    <Accordion >
      {allUsers.users?.length ?
        allUsers.users.map( ( item, pos ) => {
          return (
            <Accordion.Item eventKey={pos} key={item._id} onClick={( event ) => hadleClick( event, item )}>
              <Accordion.Header>
                <div className='w-100 text-truncate'>
                  <div className="d-flex justify-content-between ">
                    <h5 className="mb-1">{item.name}</h5>

                  </div>
                  <div className="mb-1" >{item.email}</div>
                  <div className="d-flex justify-content-between ">
                    <small className={item.admin ? 'text-danger' : null}>Admin: {item.admin + ""}</small>
                    <small >ID: {item._id}</small>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body >
                <div className="d-flex ">
                  <EditUser editingFromAdmin={true} />
                  <DeleteUser deletingFromAdmin={true} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )
        }
        ) : <div>No users</div>}
    </Accordion></>

  return (
    <>
      {loading ? <Spinner /> : notesList}
    </>
  )
}