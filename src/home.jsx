import React from 'react';
import './home.css'; // Importing the CSS file

function Home() {
  return (
    <>
      <div className="navbar">
        <a className="active" href="/">Team GAHSP</a>
        <a href="/map">GAHSP Map</a>
        <a href="/visualization">Machine Learning Visualization</a>
        <div className="navbar-right">
          <a href="/signin">Sign In</a>
        </div>
      </div>
      <div className="container">
        <h1>Who We Are</h1>
        <p>
          We are Team GAHSP (Generating an Algorithm for Hot Spots Policing). We aim
          to rectify the bias present within the Predictive Policing algorithms
          currently in use by police stations across the country. These algorithms
          currently are fed biased data, prioritize low-level offenses, and
          reinforce racial biases.
        </p>
        <p>
          Our goal is to rectify these biases. To do so, we will obtain crime data
          from various U.S. cities, cleanse that data, and then train an algorithm
          based on the cleansed data. Additionally, we intend to analyze existing
          Predictive Policing algorithms to note where they may introduce bias in
          order to avoid it ourselves.
        </p>
      </div>
    </>
  );
}

export default Home;
