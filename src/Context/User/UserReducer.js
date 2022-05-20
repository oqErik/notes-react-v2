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
        user: payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
