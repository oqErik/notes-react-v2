import React from 'react'
import { Image } from 'react-bootstrap'
import Spinner from '../Spinner'

export default function ImageProfile( { profile } ) {
  return (
    !profile ? <Spinner /> :
      <Image
        src={profile.img || 'https://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030'}
        className='fluid rounded'
        alt=""
        width={200}
        height={200} />
  )
}
