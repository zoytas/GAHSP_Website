import React from 'react';
import './signin.css'; // Importing the CSS file

function SignIn() {
  return (
    <>
      <div className="navbar">
        <a href="/">Team GAHSP</a>
        <a href="/map">GAHSP Map</a>
        <a href="#visualization">Machine Learning Visualization</a>
        <div className="navbar-right">
          <a className="active" href="/signin">
            Sign In
          </a>
        </div>
      </div>
      <div className="login-container">
        <input type="email" placeholder="Email Address" />
        <button className="login-btn">Continue</button>
        <button className="login-btn" style={{ backgroundColor: "#f7f7f7", color: "black", marginTop: 10 }}>
          Register New Account
        </button>
        <div className="or-separator">
          <hr /> OR <hr />
        </div>
        <div className="social-login">
          <button style={{ backgroundColor: "#F7F7F7" }}>
            <img src="google-icon.png" alt="Google" />
            <br /> Continue with Google
          </button>
          <button style={{ backgroundColor: "#F7F7F7" }}>
            <img src="facebook-icon.png" alt="Facebook" />
            <br /> Continue with Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;