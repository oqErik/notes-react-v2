import React from 'react'
import { Image } from 'react-bootstrap'
import Spinner from '../Spinner'

export default function ImageProfile( { profile } ) {
  return (
    !profile ? <Spinner /> :
      <div className="col-md-3 pb-4 d-flex align-items-center justify-content-center">
        <Image
          src={profile.img}
          className='fluid rounded'
          alt=""
          width={200}
          height={200} />
      </div>
  )
}
