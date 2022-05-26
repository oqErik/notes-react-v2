import React from 'react'

import List from './List'
import Content from './Content'
import Buttons from './Buttons'

export default function Notes() {
  return (
    <div className="container-fluid">
      <h2 className="text-center">My Notes</h2>
      <div className="row">
        <div className="col-md-2 pb-4">
          <List />
        </div>
        <div className="col-md-8 pb-4">
          <Content />
        </div>
        <div className="col-md-2 pb-4">
          <Buttons />
        </div>
      </div>
    </div>
  )
}
