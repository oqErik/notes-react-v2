import React from 'react'
import { Alert } from 'react-bootstrap';

export default function ErrorsAlert( { errors, loading } ) {
  return (
    errors?.length > 0 && !loading ?
      <Alert variant="danger" >
        <Alert.Heading>Oh snap! 🙀</Alert.Heading>
        <ul>
          {errors.map( ( item, pos ) => {
            return <li key={pos} >{item.msg}</li>
          } )}
        </ul>
      </Alert> : null
  )
}
