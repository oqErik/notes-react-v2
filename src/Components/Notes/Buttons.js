import React, { useContext } from 'react'
import NotesContext from '../../Context/NotesContext'
import New from './New'
import Delete from './Delete'
import Edit from './Edit'

export default function Buttons() {
  const { selectedNote } = useContext( NotesContext )

  return (
    <>
      <New />
      {selectedNote && <Edit editingFromAdmin={false} />}
      {selectedNote && <Delete deletingFromAdmin={false} />}
    </>
  )
}
