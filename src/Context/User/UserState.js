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
    user: null,
    isAdmin: false,
  };

  const [ state, dispatch ] = useReducer( UserReducer, initialState );

  const login = async ( { email, password } ) => {
    try {
      const res = await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/auth/login', { email, password } )
      localStorage.setItem( 'token', res.data.token )
      dispatch( { type: types.LOGIN, payload: res.data.usuario } );
    } catch ( error ) {
      console.error( error );
    }
  };

  const logout = () => {
    //localStorage.removeItem( 'token' )
    dispatch( { type: types.LOGOUT, payload: null } );

  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
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
