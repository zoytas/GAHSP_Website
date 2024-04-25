import React from 'react';
import './map.css'; // Importing the CSS file

function Map() {
  return (
    <>
      <div className="navbar">
        <a href="/">Team GAHSP</a>
        <a className="active" href="/map">
          GAHSP Map
        </a>
        <a href="/visualization">Machine Learning Visualization</a>
        <div className="navbar-right">
          <a href="/signin">Sign In</a>
        </div>
      </div>
      <div className="search-box">
        <input type="text" id="search-input" placeholder="Search for a location" />
      </div>
      <div id="map" />
      {/* Script goes here, don't know how to do in React/if we need to do this */}
    </>
  );
}

export default Map;