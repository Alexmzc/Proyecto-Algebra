import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Proyecto <br/>
            <span className="one">"Elementos del Algebra para la Computación"</span> <br/>
            <span className="two">Felipe Schneeberger - Waldo Ancacoy - Michel Muñoz</span>
          </h2>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
