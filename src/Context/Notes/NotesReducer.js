const types = {
  GET_NOTES: "GET_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  GET_NOTES_ADMIN: "GET_NOTES_ADMIN",
  LOADING: "LOADING",
  CLEAR_NOTES: "CLEAR_NOTES",
  ERRORS: "ERROS"
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

    default:
      return state;
  }
};
