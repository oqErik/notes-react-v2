import React, { useState, useEffect } from 'react'
import { Form, Image } from 'react-bootstrap'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
import axios from 'axios';

export default function Profile() {
  const [ profile, setProfile ] = useState( {} )
  useEffect( () => {
    const getData = async () => {
      try {
        const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/users/`,
          { headers: { token: localStorage.getItem( 'token' ) } } )
        setProfile( res.data )
      } catch ( error ) {
        console.error( error );
      }
    }
    getData()
  }, [] )

  const main =
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={profile.name} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1 ">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={profile.email} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder={profile.img} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Admin</Form.Label>
        <Form.Control type="text" placeholder={profile.admin ? 'YES' : 'NO'} disabled />
      </Form.Group>
    </Form>

  return (
    <div className="container">
      <h2 className="text-center">My Profile</h2>
      <div className="row">
        <div className="col-md-3 pb-4 d-flex align-items-center justify-content-center">
          <Image
            src={profile.img}
            className='fluid rounded ' alt=""
            width={200}
            height={200} />
        </div>
        <div className="col-md-8 pb-4">
          {main}
          <div className="d-flex">
            <EditUser profile={profile} editingFromAdmin={false} />
            <DeleteUser profile={profile} deletingFromAdmin={false} />
          </div>
        </div>

      </div>
    </div>
  )
}
