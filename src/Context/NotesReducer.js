const types = {
  GET_NOTES: "GET_NOTES",
  GET_NOTE: "GET_NOTE",
  EDITED: "EDITED"
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
    case types.GET_NOTE:
      return {
        ...state,
        selectedNote: payload,
      };
    case types.EDITED:
      return {
        ...state,
        edited: payload,
      };

    default:
      return state;
  }
};
