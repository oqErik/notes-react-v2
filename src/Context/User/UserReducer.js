const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ERROR: "ERROR",
  LOADING: "LOADING"
}

// eslint-disable-next-line
export default ( state, action ) => {

  const { payload, type } = action;

  switch ( type ) {
    case types.LOGIN:
      return {
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    case types.LOGOUT:
      return {
        token: null,
        isAdmin: null,
        errors: [],
        loading: false
      };
    case types.ERROR:
      return {
        ...state,
        errors: payload
      };
    case types.LOADING:
      return {
        ...state,
        loading: payload
      };

    default:
      return state;
  }
};
