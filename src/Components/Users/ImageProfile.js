import React from 'react'
import { Image } from 'react-bootstrap'
import Spinner from '../Spinner'

export default function ImageProfile( { profile } ) {
  return (
    !profile ? <Spinner /> :
      <Image
        src={profile.img}
        className='fluid rounded'
        alt=""
        width={200}
        height={200} />
  )
}
