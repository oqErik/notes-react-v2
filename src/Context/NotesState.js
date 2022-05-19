import React, { useReducer } from "react";
import axios from "axios";

import NotesReducer from "./NotesReducer";
import NotesContext from "./NotesContext";

const types = {
  GET_NOTES: "GET_NOTES",
  GET_NOTE: "GET_NOTE",
  EDITED: "EDITED",
}

const NotesState = ( props ) => {
  const initialState = {
    notes: [],
    selectedNote: null,
    edited: false
  };

  const [ state, dispatch ] = useReducer( NotesReducer, initialState );

  const getNotes = async () => {
    try {
      const res = await axios.get( 'https://notes-rest-api-v1.herokuapp.com/api/notes', {
        headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkZTM5ZDE2YmNkYTQwMzQ1NzdhMTkiLCJpYXQiOjE2NTI5MzA0MTYsImV4cCI6MTY1Mjk0NDgxNn0.cV5JE5nS5NQDkWgKwm8d14qYrlPtIfOe6avz8Ba-U4k' }
      } )
      dispatch( { type: types.GET_NOTES, payload: res.data } );



    } catch ( error ) {
      console.error( error );
    }
  };
  /// CONSULT TO THE STATE NOT TO THE API
  const getNote = ( payload ) => {
    try {
      /* const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/notes/${id}`, {
        headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkZTM5ZDE2YmNkYTQwMzQ1NzdhMTkiLCJpYXQiOjE2NTI5MTU5NzYsImV4cCI6MTY1MjkzMDM3Nn0.Eb12NNgnbqOZI-X2Ld3_oieXieGC-crezOMkrfS5SKk' }
      } ) */


      dispatch( { type: types.GET_NOTE, payload } );
    } catch ( error ) {
      console.error( error );
    }
  };

  const changeEdited = ( payload ) => {
    dispatch( { type: types.EDITED, payload } );

  }

  const saveEditedNote = async ( editedNote ) => {
    try {
      await axios.put( `https://notes-rest-api-v1.herokuapp.com/api/notes/${editedNote._id}`, editedNote, {
        headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkZTM5ZDE2YmNkYTQwMzQ1NzdhMTkiLCJpYXQiOjE2NTI5MzA0MTYsImV4cCI6MTY1Mjk0NDgxNn0.cV5JE5nS5NQDkWgKwm8d14qYrlPtIfOe6avz8Ba-U4k' }
      } )

      getNotes()
    } catch ( error ) {
      console.error( error );
    }
  }
  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        selectedNote: state.selectedNote,
        edited: state.edited,
        getNotes,
        getNote,
        changeEdited,
        saveEditedNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
