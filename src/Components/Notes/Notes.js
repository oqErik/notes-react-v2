import React from 'react'

import List from './List'
import Content from './Content'
import Buttons from './Buttons'

export default function Notes() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-2">
          <List />
        </div>
        <div className="col-md-8">
          <Content />
        </div>
        <div className="col-md-2">
          <Buttons />
        </div>
      </div>
    </div>
  )
}
