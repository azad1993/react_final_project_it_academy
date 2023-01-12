import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "gray",
      value: "",
      list: [],
      link: false,
      id: " ",
    };
  }

  boxClick = (e) => {
    this.setState({
      bgColor: e.target.value ? "green" : "gray",
      value: e.target.value,
    });
  };
  post = (e) => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        // "id": "d2514e41-9349-446e-9cee-a8fe25a1332c",
        "title": this.state.value,
        "movies": this.props.favouriteMovie
      }),
    })
      .then((res) => res.json())
      .then((data) => this.setState({id: data.id}));
    this.setState({ link: true });
  };

  render() {
    return (
      <div className="favorites">
        <input
          value={this.state.value}
          onChange={this.boxClick}
          className="favorites__name"
        />
        <ul className="favorites__list">
          {this.props.favouriteMovie.map((item, index) =>
            this.props.favouriteMovie.indexOf(item) !== index ? null : (
              <li key={item.imdbID}>
                {item.Title} ({item.Year}){" "}
              </li>
            )
          )}
        </ul>
        <a href={`/list/${this.state.id}`} className={this.state.link ? "" : "hidden"}>
          {" "}
          A
        </a>
        <br></br>
        <button
          type="button"
          className="favorites__save"
          style={{ backgroundColor: this.state.bgColor }}
          disabled={!this.state.value}
          onClick={this.post}
        >
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    favouriteMovie: store.favouriteMovie,
  };
};

export default connect(mapStateToProps)(Favorites);
