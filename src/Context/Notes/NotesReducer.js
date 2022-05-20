const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
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
    default:
      return state;
  }
};
