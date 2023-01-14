const initialState = {
  movies: [],
  favouriteMovie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: action.payload };
    case "ADD_FAVORITES":
      
      let myItem = state.favouriteMovie.find(
        (item) => item && item.imdbID === action.payload.imdbID
      );
      if (myItem === undefined) {
        return {
          ...state,
          favouriteMovie: [...state.favouriteMovie, action.payload],
        };
      }

      return state;

      case "DELETE_FAVORITES":
      
      let myDelete = state.favouriteMovie.map(
        (item) =>  {if(item && item.imdbID !== action.payload.imdbID){return item}}
      );
      console.log(myDelete)
      return {
        ...state,
        favouriteMovie: myDelete
      };

    default:
      return state;
  }
};

export default reducer;
