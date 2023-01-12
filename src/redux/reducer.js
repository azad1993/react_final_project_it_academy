const initialState = { 
  movies: [], 
  favouriteMovie: [], 
}; 
 
const reducer = (state = initialState, action) => { 
  switch (action.type) { 
    case "ADD_MOVIE": 
      return { ...state, movies: action.payload }; 
    case "ADD_FAVORITES":   
        
      return { ...state, favouriteMovie:[...state.favouriteMovie,action.payload] }; 
    default: 
      return state; 
  } 
}; 
 
export default reducer;