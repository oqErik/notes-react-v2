import React, { useReducer } from "react";
import axios from "axios";

import NotesReducer from "./NotesReducer";
import NotesContext from "./NotesContext";

const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  GET_NOTES_ADMIN: "GET_NOTES_ADMIN",
  LOADING: "LOADING",
  CLEAR_NOTES: "CLEAR_NOTES",
  ERRORS: "ERROS"
}
const token = { 'token': localStorage.getItem( 'token' ) }

const NotesState = ( props ) => {
  const initialState = {
    notes: [],
    selectedNote: null,
    allNotes: [],
    loading: true,
    errors: []
  };

  const [ state, dispatch ] = useReducer( NotesReducer, initialState );

  const clearNotes = () => {
    dispatch( { type: types.CLEAR_NOTES, payload: null } );
  }

  const getNotes = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( 'https://notes-rest-api-v1.herokuapp.com/api/notes', { headers: token } )
      dispatch( { type: types.GET_NOTES, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

      console.error( error );
    }
  };

  /// CONSULT TO THE STATE NOT TO THE API
  const selectNote = ( note ) => {
    try {
      dispatch( { type: types.SELECT_NOTE, payload: note } );
    } catch ( error ) {
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

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
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

      console.error( error );
    }
  }

  const deleteNote = async ( id ) => {
    try {
      await axios.delete( `https://notes-rest-api-v1.herokuapp.com/api/notes/${id}`, { headers: token } )
      getNotes()
      selectNote( null )
    } catch ( error ) {
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

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
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

      console.error( error );
    }
  }


  const getAllNotesAdmin = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/notes`,
        { headers: token }
      )
      dispatch( { type: types.GET_NOTES_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

      console.error( error );
    }
  }

  const searchNotesAdmin = async ( params ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/notes/${params}`,
        { headers: token }
      )
      dispatch( { type: types.GET_NOTES_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

      console.error( error );
    }
  }

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        selectedNote: state.selectedNote,
        allNotes: state.allNotes,
        loading: state.loading,
        getNotes,
        selectNote,
        saveNewNote,
        deleteNote,
        updateNote,
        getAllNotesAdmin,
        searchNotesAdmin,
        clearNotes,
        errors: state.errors
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
