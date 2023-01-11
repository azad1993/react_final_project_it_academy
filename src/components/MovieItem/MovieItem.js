import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import "./MovieItem.css"; 
 
class MovieItem extends Component { 

  render() { 
    const { Title, Year, Poster, imdbID } = this.props; 
     
    return ( 
      <article className="movie-item"> 
        <img className="movie-item__poster" src={Poster} alt={Title} /> 
        <div className="movie-item__info"> 
          <h3 className="movie-item__title"> 
            {Title}&nbsp;({Year}) 
          </h3> 
          <button 
            type="button" 
            key={imdbID} 
            title={imdbID} 
            onClick={() => this.props.addFavorites(this.props)} 
            className="movie-item__add-button" 
          > 
            Добавить в список 
          </button> 
        </div> 
      </article> 
    ); 
  } 
} 
 
const mapDispatchToProps = (dispatch) => { 
  return { 
    addFavorites: (movie) => dispatch({ type: "ADD_FAVORITES", payload:movie}), 
  }; 
}; 
 
export default connect(null,mapDispatchToProps)(MovieItem);