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
        token: payload.token,
        isAdmin: payload.isAdmin,
      };
    case types.LOGOUT:
      return {
        token: null,
        isAdmin: null,
      };

    default:
      return state;
  }
};
