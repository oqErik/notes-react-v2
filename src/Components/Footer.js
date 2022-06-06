import React from 'react'
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons'


export default function Footer() {
  return (
    <footer className="footer mt-auto bg-dark text-center text-white">
      <div className="container p-1  b-0">
        <section className="mb-1">
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/erik-ortiz-q/" rel="noopener noreferrer" role="button"
          ><Linkedin></Linkedin> Linkedin</a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="/Resume.pdf" rel="noopener noreferrer" role="button"
          ><Envelope></Envelope> Download my CV</a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/oqErik" rel="noopener noreferrer" role="button"
          ><Github></Github> GitHub</a>
        </section>
      </div>
      <div className="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Erik Ortiz
      </div>
    </footer>
  )
}
