import React, { useReducer } from "react";
import axios from "axios";

import NotesReducer from "./NotesReducer";
import NotesContext from "./NotesContext";

const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
}
const token = { 'token': localStorage.getItem( 'token' ) }

const NotesState = ( props ) => {
  const initialState = {
    notes: [],
    selectedNote: null,
  };

  const [ state, dispatch ] = useReducer( NotesReducer, initialState );

  const getNotes = async () => {
    try {
      const res = await axios.get( 'https://notes-rest-api-v1.herokuapp.com/api/notes', { headers: token } )
      dispatch( { type: types.GET_NOTES, payload: res.data } );
    } catch ( error ) {
      console.error( error );
    }
  };

  /// CONSULT TO THE STATE NOT TO THE API
  const selectNote = ( note ) => {
    try {
      dispatch( { type: types.SELECT_NOTE, payload: note } );
    } catch ( error ) {
      console.error( error );
    }
  };

  const saveNewNote = async ( newNote ) => {
    try {
      await axios.post( `https://notes-rest-api-v1.herokuapp.com/api/notes`,
        newNote,
        { headers: token }
      )
      getNotes()
    } catch ( error ) {
      console.error( error );
    }
  }

  const deleteNote = async ( id ) => {
    try {
      await axios.delete( `https://notes-rest-api-v1.herokuapp.com/api/notes/${id}`, { headers: token } )
      getNotes()
      selectNote( null )
    } catch ( error ) {
      console.error( error );
    }
  }

  const updateNote = async ( { _id, title, description } ) => {
    try {
      await axios.put( `https://notes-rest-api-v1.herokuapp.com/api/notes/${_id}`,
        { title, description },
        { headers: token }
      )
      getNotes()
      selectNote( null ) //refreseshes the content component
    } catch ( error ) {
      console.error( error );
    }
  }


  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        selectedNote: state.selectedNote,
        getNotes,
        selectNote,
        saveNewNote,
        deleteNote,
        updateNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
