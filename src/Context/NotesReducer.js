const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  GET_NOTES_ADMIN: "GET_NOTES_ADMIN",
  LOADING: "LOADING",
  ERRORS: "ERRORS",
  CLEAR_NOTES: "CLEAR_NOTES",
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
    case types.CLEAR_NOTES:
      return {
        notes: [],
        selectedNote: null,
        allNotes: [],
        loading: true
      };
    case types.ERRORS:
      return {
        ...state,
        errors: payload
      };
    case types.LOGIN:
      return {
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    // USERS //
    case types.LOGOUT:
      return {
        token: null,
        isAdmin: null,
        errors: [],
        loading: false
      };



    default:
      return state;
  }
};
