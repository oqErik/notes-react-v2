const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  GET_NOTES_ADMIN: "GET_NOTES_ADMIN",
  LOADING: "LOADING",
  ERRORS: "ERRORS",
  //USERS//
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
}

// eslint-disable-next-line
export default ( state, action ) => {


  const { payload, type } = action;

  switch ( type ) {
    case types.GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case types.SELECT_NOTE:
      return {
        ...state,
        selectedNote: payload,
      };
    case types.GET_NOTES_ADMIN:
      return {
        ...state,
        allNotes: payload,
      };
    case types.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case types.ERRORS:
      return {
        ...state,
        errors: payload
      };
    case types.LOGIN:
      return {
        ...state,
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    // USERS //
    case types.LOGOUT:
      return {
        notes: [],
        selectedNote: null,
        allNotes: [],
        token: null,
        isAdmin: null,
        errors: [],
        loading: false
      };



    default:
      return state;
  }
};
