const initialState = {
  movies: [],
  select: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: action.payload };
    case "ADD_FAVORITES":
      return { ...state, select: action.payload };
    default:
      return state;
  }
};

export default reducer;
