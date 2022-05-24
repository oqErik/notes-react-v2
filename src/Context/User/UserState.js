import React, { useReducer, useContext } from "react";
import axios from "axios";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import NotesContext from '../Notes/NotesContext'

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ERROR: "ERROR",
  LOADING: "LOADING"
}

const UserState = ( props ) => {

  const initialState = {
    token: localStorage.getItem( 'token' ),
    isAdmin: localStorage.getItem( 'isAdmin' ),
    errors: [],
    loading: false
  };

  const [ state, dispatch ] = useReducer( UserReducer, initialState );
  const { getNotes } = useContext( NotesContext );

  const login = async ( { email, password } ) => {
    try {
      dispatch( { type: types.LOADING, payload: true } );

      const res = await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/auth/login', { email, password } )
      const token = res.data.token
      const isAdmin = res.data.usuario.admin === true ? true : false
      localStorage.setItem( 'token', res.data.token )
      localStorage.setItem( 'isAdmin', res.data.usuario.admin )
      dispatch( { type: types.LOGIN, payload: { token, isAdmin } } );
      dispatch( { type: types.LOADING, payload: false } );

      // await getNotes()
    } catch ( error ) {
      console.error( error );
      dispatch( { type: types.LOADING, payload: false } );

      dispatch( { type: types.ERROR, payload: error.response.data.errors } );

    }
  };

  const logout = () => {
    localStorage.clear()
    dispatch( { type: types.LOGOUT, payload: null } );
  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        isAdmin: state.isAdmin,
        login,
        logout,
        errors: state.errors,
        loading: state.loading

      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
