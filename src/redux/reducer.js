const initialState = {
  movies: [],
  select: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: action.payload };
    case "ADD_FAVORITES":
      console.log(action.payload)
      // return { ...state, movie: action.payload };
      return state
    default:
      return state;
  }
};

export default reducer;
