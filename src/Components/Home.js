import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className='mt-4'>

      <h1 >Hello!</h1>
      <p>Hello this is NOTES REACT APP and I made it completly from scratch I made it in React and Bootstrap using some React Hooks like UseState, UseEffect, UseContext.
        This app does HTTP requests to the API I made NOTES REST API </p>
      <div className='text-center'>Tecnologies and features  in this app:
        <div className='d-flex justify-content-evenly  m-1'>
          <ul>
            <strong>Tecnologies:</strong>
            <li>React</li>
            <li>React Router</li>
            <li>React Hooks</li>
            <li>useContext (instead of Redux) </li>
            <li>Axios</li>

          </ul>
          <ul>
            <strong>Features:</strong>
            <li>Error Handling</li>
            <li>Protected Routes</li>
            <li>Admin Section</li>
            <li>REST operations on notes</li>
            <li>REST operations on users</li>
            <li>Fully responsive design</li>

          </ul>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/erik-ortiz-q/">My Linkedin</a>
      <p>You can start by adding a new account by clicking "Add User" on the Navbar then start creating notes. Dont worry about the email part you can put a random email that dosnt exists.</p>
      <p>Or you can login with this account: </p>
      <code>email: admin123@fakemail.com</code>
      <br />
      <code>pass: admin123</code>

    </Container>
  )
}
