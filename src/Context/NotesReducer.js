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

    // USERS //
    case types.LOGIN:
      return {
        ...state,
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    case types.LOGOUT:
      return {
        notes: [],
        selectedNote: null,
        allNotes: [],
        token: null,
        isAdmin: null,
        errors: [],
        loading: false,
        allUsers: [],
        profile: null,
      };
    case types.GET_USERS_ADMIN:
      return {
        ...state,
        allUsers: payload,
      };
    case types.SELECT_USER:
      return {
        ...state,
        selectedUser: payload,
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
    case types.GET_PROFILE:
      return {
        ...state,
        profile: payload
      };
    default:
      return state;
  }
};
