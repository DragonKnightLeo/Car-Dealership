import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


function Map() {
  return (
    <GoogleMap
    defaultZoom={10} defaultCenter={{ lat: 35.227085, lng: -80.843124 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Footer() {
  return (
    <footer>
      <ul>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Certified Pre-Owned</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Contact Us</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>FAQ</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>News & Press</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Finacial Services</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Privacy Policy</li>
        </Link>
      </ul>
      <div className="map" style={{ width: '400px', height: '400px'}}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
          libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </footer>
  )
}

export default Footer;
