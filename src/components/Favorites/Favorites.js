import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Favorites extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      bgColor: "gray",
      value: ""
    }
  }

boxClick = (e) => {
    this.setState({
      bgColor: e.target.value ? "green" : "gray",
      value: e.target.value
    })
  }
  render() {
    
    return (
        
      <div className="favorites">
        <input value={this.state.value} onChange={this.boxClick} className="favorites__name" />
        <ul className="favorites__list">
          {this.props.favouriteMovie.map((item,index) =>
             this.props.favouriteMovie.indexOf(item) !== index ? null :
              <li key={item.imdbID}>
                {item.Title} ({item.Year}){" "}
              </li>
            )
          }
        </ul>
        <button
          type="button"
          className="favorites__save"
          style={{backgroundColor: this.state.bgColor}}
          disabled = {!this.state.value}
        >{this.state.value}
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
