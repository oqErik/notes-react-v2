import React from 'react'
import { Form } from 'react-bootstrap'
import Spinner from '../Spinner'

export default function MainProfile( { profile } ) {
  return (
    !profile ? <Spinner /> :
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
  )
}
