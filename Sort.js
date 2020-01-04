import React, { Component } from 'react';
import './App.css';


class Sort extends Component {
  render() {
    return (
      <div className="sort-container">
        <h1>Sort By</h1>
        <ul>
          <li style={{ listStyleType: "none"}}><input type="checkbox" name="SUV"/>  SUV</li>
          <li style={{ listStyleType: "none"}}><input type="checkbox" name="Sedan"/>  Sedan</li>
          <li style={{ listStyleType: "none"}}><input type="checkbox" name="Wagon"/>  Wagon</li>
        </ul>
      </div>
    )
  }
}

export default Sort;
