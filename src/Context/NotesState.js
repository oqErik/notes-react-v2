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
  ERRORS: "ERRORS",
  //USERS//
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
}

const getToken = () => ( { 'token': localStorage.getItem( 'token' ) } )

const NotesState = ( props ) => {
  const initialState = {
    notes: [],
    selectedNote: null,
    allNotes: [],
    loading: false,
    errors: [],
    //USERS//
    token: localStorage.getItem( 'token' ),
    isAdmin: localStorage.getItem( 'isAdmin' ) === 'true' ? true : false,
  };

  const [ state, dispatch ] = useReducer( NotesReducer, initialState );

  const login = async ( { email, password } ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/auth/login', { email, password } )
      const token = res.data.token
      const isAdmin = res.data.usuario.admin === true ? true : false
      localStorage.setItem( 'token', token )
      localStorage.setItem( 'isAdmin', isAdmin )
      dispatch( { type: types.LOGIN, payload: { token, isAdmin } } );
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: [] } );
      return [] // i use this return to notify errors to my component

    } catch ( error ) {
      console.error( error );
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      return error.response.data.errors // i use this return to notify errors to my component
    }
  };

  const logout = () => {
    localStorage.clear()
    dispatch( { type: types.LOGOUT, payload: null } );
  }

  // NOTES //
  const getNotes = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( 'https://notes-rest-api-v1.herokuapp.com/api/notes', { headers: getToken() } )
      dispatch( { type: types.GET_NOTES, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: [] } );
      return []
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
      return error.response.data.errors
    }
  };

  /// CONSULT TO THE STATE NOT TO THE API
  const selectNote = ( note ) => {
    try {
      dispatch( { type: types.SELECT_NOTE, payload: note } );
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
    }
  };

  const saveNewNote = async ( newNote ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      await axios.post( `https://notes-rest-api-v1.herokuapp.com/api/notes`,
        newNote,
        { headers: getToken() }
      )
      getNotes() // to refresh check this one
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: null } );
      return []
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
      return error.response.data.errors
    }
  }

  const deleteNote = async ( id ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      await axios.delete( `https://notes-rest-api-v1.herokuapp.com/api/notes/${id}`, { headers: getToken() } )
      selectNote( null )
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
      dispatch( { type: types.LOADING, payload: false } );
    }
  }

  const updateNote = async ( { _id, title, description } ) => {
    try {
      await axios.put( `https://notes-rest-api-v1.herokuapp.com/api/notes/${_id}`,
        { title, description },
        { headers: getToken() }
      )
      getNotes()
      selectNote( null ) //refreseshes the content component
      return []
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
      return error.response.data.errors
    }
  }


  const getAllNotesAdmin = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/notes`,
        { headers: getToken() }
      )
      dispatch( { type: types.GET_NOTES_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );

      console.error( error );
    }
  }

  const searchNotesAdmin = async ( params ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/notes/${params}`,
        { headers: getToken() }
      )
      dispatch( { type: types.GET_NOTES_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );

      console.error( error );
    }
  }

  const deleteNoteAdmin = async ( id ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );

      await axios.delete( `https://notes-rest-api-v1.herokuapp.com/api/notes/${id}`, { headers: { 'token': getToken() } } )
      getAllNotesAdmin()
      selectNote( null )
      dispatch( { type: types.LOADING, payload: false } );

    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      dispatch( { type: types.LOADING, payload: false } );

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
        errors: state.errors,
        getNotes,
        selectNote,
        saveNewNote,
        deleteNote,
        updateNote,
        getAllNotesAdmin,
        searchNotesAdmin,
        // USERS // 
        token: state.token,
        isAdmin: state.isAdmin,
        login,
        logout,
        deleteNoteAdmin
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
