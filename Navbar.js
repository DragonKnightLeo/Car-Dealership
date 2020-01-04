import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-title">Auto Spark Dealers</div>
        </Link>
        <ul className="nav-links">
          <Link to="/VehicleList" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className="link">Vehicles</li>
          </Link>
          <li className="link">
            <button className="dropdown-btn">
              Shopping Tools
            </button>
          </li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className="link">About Us</li>
          </Link>
        </ul>
        <Search />
      </nav>
    )
  }
}

export default Navbar;
