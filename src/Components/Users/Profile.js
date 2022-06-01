import React, { useContext, useEffect } from 'react'

import NotesContext from "../../Context/NotesContext";
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
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
          <div className="col-md-3 pb-4 d-flex align-items-center justify-content-center">
            <ImageProfile profile={profile} />
          </div>
          <div className="col-md-8 pb-4">
            <MainProfile profile={profile} />
            <div className="d-flex">
              <EditUser profile={profile} editingFromAdmin={false} />
              <DeleteUser profile={profile} deletingFromAdmin={false} />
            </div>
          </div>
        </div>
      }
    </div >
  )
}
