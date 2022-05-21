import React, { useReducer } from "react";
import axios from "axios";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
}

const UserState = ( props ) => {

  const initialState = {
    token: localStorage.getItem( 'token' ),
    isAdmin: localStorage.getItem( 'isAdmin' ),
  };

  const [ state, dispatch ] = useReducer( UserReducer, initialState );

  const login = async ( { email, password } ) => {
    try {
      const res = await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/auth/login', { email, password } )
      const token = res.data.token
      const isAdmin = res.data.usuario.admin
      localStorage.setItem( 'token', res.data.token )
      localStorage.setItem( 'isAdmin', res.data.usuario.admin )
      dispatch( { type: types.LOGIN, payload: { token, isAdmin } } );

    } catch ( error ) {
      console.error( error );
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
        logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
