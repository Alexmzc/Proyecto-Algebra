import React, { Component } from 'react';
import logo from './logo.png';
import pi from './favicon.png';
import './Bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="one">Elementos del Algebra para la Computación</p>
          <p className="two">Waldo Ancacoy - Michel Muñoz - Felipe Schneeberger</p>
        </div>
        <div className="App-home">
          <h1>¿Que necesitas aprender?</h1>
          <div className="row">
            <div className="col-md-4 offset-4">
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="offset-2 col-md-2">
              <h5>Logica Proposicional</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <button type="button" className="btn btn-outline-primary btn-sm">Ver mas...</button>
            </div>
            <div className="col-md-2">
              <h5>Conjuntos</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <button type="button" className="btn btn-outline-primary btn-sm">Ver mas...</button>
            </div>
            <div className="col-md-2">
              <h5>Funciones Cuadraticas</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <button type="button" className="btn btn-outline-primary btn-sm">Ver mas...</button>
            </div>
            <div className="col-md-2">
              <h5>Función Polinomial</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <button type="button" className="btn btn-outline-primary btn-sm">Ver mas...</button>
            </div>
          </div>
        </div>
        <footer>
          <img src={pi} width="15px"/>
          <p className="text-center">Desarrollado por Estudiantes de Ingenieria Civil Informática <br/>Universidad Catolica de Temuco</p>
        </footer>
      </div>
    );
  }
}

export default App;
