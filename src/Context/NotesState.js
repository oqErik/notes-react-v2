import React, { useReducer } from "react";
import axios from "axios";

import NotesReducer from "./NotesReducer";
import NotesContext from "./NotesContext";

const types = {
  //NOTES//
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  GET_NOTES_ADMIN: "GET_NOTES_ADMIN",

  //USERS//
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SELECT_USER: "SELECT_USER",
  GET_USERS_ADMIN: "GET_USERS_ADMIN",
  GET_PROFILE: "GET_PROFILE",

  //MISC//
  LOADING: "LOADING",
  ERRORS: "ERRORS",
}

const getToken = () => ( { 'token': localStorage.getItem( 'token' ) } )

const NotesState = ( props ) => {
  const initialState = {
    //NOTES//
    notes: [],
    selectedNote: null,
    allNotes: [],

    //USERS//
    allUsers: [],
    selectedUser: null,

    //MISC//
    profile: JSON.parse( localStorage.getItem( 'profile' ) ),
    token: localStorage.getItem( 'token' ),
    isAdmin: localStorage.getItem( 'isAdmin' ) === 'true' ? true : false,
    loading: false,
    errors: [],
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
      getProfile()
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: [] } );
      return [] // i use this return to notify errors to my component

    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      return error.response.data.errors // i use this return to notify errors to my component
    }
  };

  const logout = () => {
    localStorage.clear()
    dispatch( { type: types.LOGOUT, payload: null } );
  }

  const addUser = async ( user ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/users', user )
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: [] } );
      return await login( user )
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      return error.response.data.errors
    }
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
      return error.response.data.errors
    }
  };

  /// CONSULT TO THE STATE NOT TO THE API
  const selectNote = ( note ) => {
    try {
      dispatch( { type: types.SELECT_NOTE, payload: note } );
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
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
      dispatch( { type: types.LOADING, payload: false } );
    }
  }

  const updateNote = async ( { _id, title, description } ) => {
    try {
      await axios.put( `https://notes-rest-api-v1.herokuapp.com/api/notes/${_id}`,
        { title, description },
        { headers: getToken() }
      )
      selectNote( null )
      return []
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
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
    }
  }

  const getUsersAdmin = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/users`,
        { headers: getToken() }
      )
      dispatch( { type: types.GET_USERS_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
    }
  }

  const searchUsersAdmin = async ( params ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/search/users/${params}`,
        { headers: getToken() }
      )
      dispatch( { type: types.GET_USERS_ADMIN, payload: res.data } );
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
    }
  }

  const selectUser = ( user ) => {
    try {
      dispatch( { type: types.SELECT_USER, payload: user } );
    } catch ( error ) {
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
    }
  };

  const deleteUser = async ( id ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      await axios.delete( `https://notes-rest-api-v1.herokuapp.com/api/users/${id}`,
        { headers: getToken() }
      )
      selectUser( null )
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
    }
  };

  const editUser = async ( { _id, name, password = "", img, admin }, changePass ) => {
    const body = changePass ? { name, password, img, admin } : { name, img, admin }
    try {
      dispatch( { type: types.LOADING, payload: true } );
      await axios.put( `https://notes-rest-api-v1.herokuapp.com/api/users/${_id}`, body, { headers: getToken() } )
      dispatch( { type: types.LOADING, payload: false } );
      //dispatch( { type: types.GET_PROFILE, payload: res.data } );
      dispatch( { type: types.ERRORS, payload: [] } );
      return []
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
      console.error( error );
      return error.response.data.errors
    }
  };

  const getProfile = async () => {
    try {
      dispatch( { type: types.LOADING, payload: true } );
      const res = await axios.get( `https://notes-rest-api-v1.herokuapp.com/api/users/`,
        { headers: { token: localStorage.getItem( 'token' ) } } )
      dispatch( { type: types.GET_PROFILE, payload: res.data } );
      localStorage.setItem( 'profile', JSON.stringify( res.data ) )
      dispatch( { type: types.LOADING, payload: false } );
    } catch ( error ) {
      dispatch( { type: types.LOADING, payload: false } );
      dispatch( { type: types.ERRORS, payload: error.response.data.errors } );
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
        profile: state.profile,
        allUsers: state.allUsers,
        token: state.token,
        isAdmin: state.isAdmin,
        selectedUser: state.selectedUser,
        login,
        logout,
        addUser,
        getUsersAdmin,
        searchUsersAdmin,
        deleteUser,
        selectUser,
        editUser,
        getProfile,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
