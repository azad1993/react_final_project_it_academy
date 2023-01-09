import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";


class Favorites extends Component {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }
    render() { 
        
        return (
            
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {console.log(this.props.select) && this.props.select.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={this.submitHandler}>Сохранить список</button>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        select: store.select
    }
  }; 

 

export default connect(mapStateToProps)(Favorites);