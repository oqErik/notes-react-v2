import React, { useContext, useEffect } from 'react'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
import NotesContext from "../../Context/NotesContext";
import Spinner from '../Spinner';
import MainProfile from './MainProfile';
import ImageProfile from './ImageProfile';


export default function Profile() {
  const { loading, getProfile, profile } = useContext( NotesContext );

  useEffect( () => {
    getProfile()
    // eslint-disable-next-line
  }, [] )

  return (

    <div className="container">

      <h2 className="text-center">My Profile</h2>
      {loading ? <Spinner /> :
        <div className="row">
          <ImageProfile profile={profile} />
          <MainProfile profile={profile} />
          <div className="col-md-8 pb-4">
            <div className="d-flex">
              <EditUser profile={profile} editingFromAdmin={false} />
              <DeleteUser profile={profile} deletingFromAdmin={false} />
            </div>
          </div>
        </div>}

    </div >
  )
}
