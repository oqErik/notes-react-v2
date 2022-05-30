import React from 'react'
import { Form, Image } from 'react-bootstrap'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
export default function Profile() {

  const main =
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1 ">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Erik Ortiz" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Admin</Form.Label>
        <Form.Control type="text" placeholder="yes" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="randomurl.com" disabled />
      </Form.Group>
    </Form>



  return (
    <div className="container">
      <h2 className="text-center">My Profile</h2>
      <div className="row">
        <div className="col-md-3 pb-4 d-flex align-items-center justify-content-center">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-9RLGAlicic8%2FUDB3IldMGXI%2FAAAAAAAAPfo%2FHEuvmHsIZTk%2Fs1600%2FCute%2BKitten%2B7.jpg&f=1&nofb=1"
            className='fluid rounded ' alt=""
            width={200}
            height={200} />
        </div>
        <div className="col-md-8 pb-4">
          {main}
          <div className="d-flex">
            <EditUser editingFromAdmin={false} />
            <DeleteUser deletingFromAdmin={false} />
          </div>
        </div>

      </div>
    </div>
  )
}
