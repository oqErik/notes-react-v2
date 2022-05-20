const types = {
  LOGIN: "LOGIN",
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

    default:
      return state;
  }
};
