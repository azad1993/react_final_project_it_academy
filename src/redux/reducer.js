const initialState = { 
  movies: [], 
  favouriteMovie: [], 
}; 
 
const reducer = (state = initialState, action) => { 
  switch (action.type) { 
    case "ADD_MOVIE": 
      return { ...state, movies: action.payload }; 
    case "ADD_FAVORITES":   
    var arr = [...state.favouriteMovie,action.payload];
    var myarr = arr.map((item,index) =>  {return arr.indexOf(item) !== index ? null : item } )
      return { ...state, favouriteMovie: myarr }; 
    default: 
      return state; 
  } 
}; 
 
export default reducer;