const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
}

// eslint-disable-next-line
export default ( state, action ) => {

  const { payload, type } = action;

  switch ( type ) {
    case types.LOGIN:
      return {
        ...state,
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    case types.LOGOUT:
      return {
        ...state,
        token: payload,
        isAdmin: payload,
      };

    default:
      return state;
  }
};
