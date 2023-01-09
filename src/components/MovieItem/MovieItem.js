import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {
    state = {
        select: "",
      };
    
        
    submitHandler = (e) => {
        e.preventDefault();
        console.log('me',e.target)
        this.setState({ select: e.target.value });
        this.props.addFavorites(e.target.value)
    };

    render() {
        const { Title, Year, Poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" key={imdbID} title={imdbID} value={this.props} onClick={this.submitHandler} className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}



const mapStateToProps = (store) => {
    return {
        select: store.select
    }
  }; 

  const mapDispatchToProps = (dispatch) => {
    return {
      addFavorites: (select) => dispatch({ type: "ADD_FAVORITES", payload: select}),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);