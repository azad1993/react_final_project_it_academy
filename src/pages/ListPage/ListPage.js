import React, { Component } from "react";
import "./ListPage.css";

class ListPage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    const id = this.props.match.params;
    console.log(id);
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.movies }));
      
      console.log(this.state.movies);
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">Мой список</h1>
        <ul>
          {this.state.movies.map((item) => {
            return item && 
              <li key={item.imdbID}>
                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank" rel="noopener noreferrer" >
                  {item.Title} ({item.Year})
                </a>
              </li>
          
        })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
