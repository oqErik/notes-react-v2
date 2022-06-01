import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className='mt-4 text-center'>
      <div className="card  border-dark">
        <img className="card-img-top" src="holder.js/100px180/" alt="" />
        <div className="card-body">
          <h4 className="card-title">Hello there!</h4>
          <p>Notes REACT App is a web application that allows you to create notes, its made (of course) in React using Bootstrap and its connected to an API hosted on Heroku that I also made and you can check it out <a href="https://notes-rest-api-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a></p>
          {/* <p>Hello this is NOTES REACT APP and I made it completly from scratch I made it in React and Bootstrap using some React Hooks like UseState, UseEffect, UseContext.
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
      <a href="https://www.linkedin.com/in/erik-ortiz-q/" target={'_blank'}>My Linkedin</a> */}
          <h4>How to start?</h4>
          <p>You can start by adding a new account by clicking "Add User" on the Navbar then start creating notes. <br />
            Dont worry about the email part you can put a random email that dosnt exists.</p>
          <p>Or you can login with any of these accounts: </p>
          <div className='d-flex justify-content-evenly'>
            <div >
              <strong>Admin User</strong>
              <div>Has access to every note of every user, <br /> can modify any note and any user</div>
              <code className='text-start'>email: admin123@fakemail.com</code>
              <br />
              <code className='text-start'>pass: admin123</code>

            </div>
            <div >
              <strong>Normal User</strong>
              <div>Has only access to own notes,<br /> cannot see or access admin section</div>
              <code className='text-start' >email: Jhon@fakemail.com</code>
              <br />
              <code className='text-start'>pass: jhon123</code>

            </div>

          </div>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </div>
      </div>


    </Container>
  )
}
