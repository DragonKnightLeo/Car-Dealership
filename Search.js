import React, { Component } from 'react';
import './App.css';


class Search extends Component {

  render() {
    const {value, handleSubmit, handleChange} = this.props
    return (
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search"
           placeholder=" make, model"
           className="search-form"
           value={value}
           onChange={handleChange}>
          </input>
          <button type="submit">
          Search
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
