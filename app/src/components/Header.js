import React, { Component } from 'react';
import logo from './../logo.png';

class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="one">Elementos del Algebra para la Computación</p>
        <p className="two">Waldo Ancacoy - Michel Muñoz - Felipe Schneeberger</p>
      </div>
    )
  }
}

export default Header;
