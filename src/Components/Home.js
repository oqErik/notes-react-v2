import React from 'react'
import { Container } from 'react-bootstrap'
export default function Home() {
  return (
    <div >
      <Container className='mt-4 pb-3 text-center'>
        <div className="card  border-dark">
          <div className="card-body">
            <h4 className="card-title">Hello there!</h4>
            <p>Notes REACT App is a web application that allows you to create notes, its made (of course) in React using Bootstrap and its connected to an API hosted on Heroku that I also made and you can check it out <a href="https://notes-rest-api-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a></p>

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
                <code className='text-start'>pass: Jhon123</code>
              </div>
            </div>
            <div>
              <h4>Key Features</h4>
              <div>Login / Logout</div>
              <div>Admin Section</div>
              <div>Profile Section</div>
              <div>Search Section for Admins</div>
              <div>Protected Routes</div>
              <div>CRUD operations on Notes</div>
              <div>CRUD operations on Users</div>
            </div>
            <div>
              <h4>Important</h4>
              <div>Only an admin can give admin permissions to a normal user, so in order to make an admin you need to login with the <strong>admin123@fakemail.com</strong> account then grant permissions to a normal account</div>
            </div>
          </div>
        </div >
      </Container >


    </div>
  )
}
