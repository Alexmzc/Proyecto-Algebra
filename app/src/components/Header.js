import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.png';

class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <div>
          <Link to="/" className="btn">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <p className="one">Elementos del Algebra para la Computación</p>
        <p className="two">Waldo Ancacoy - Michel Muñoz - Felipe Schneeberger</p>
      </div>
    )
  }
}

export default Header;
