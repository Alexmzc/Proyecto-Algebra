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
          <div className="row">
            <h1>¿Que necesitas aprender?</h1>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-3">
                <h4>Conjuntos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                  Nullam vitae lorem eget diam tincidunt vehicula.</p>
                <button type="button" className="btn btn-primary btn-sm">Ver mas información...</button>
              </div>
              <div className="col-md-3">
                <h4>Función Polinomial</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                  Nullam vitae lorem eget diam tincidunt vehicula.</p>
                <button type="button" className="btn btn-primary btn-sm">Ver mas información...</button>
              </div>
            </div>
          </div>
          <div className="row m-top-30">
            <h1>¿Que necesitas resolver?</h1>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-3">
                <h4>Logica Proposicional</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                  Nullam vitae lorem eget diam tincidunt vehicula.</p>
                <button type="button" className="btn btn-primary btn-sm">Resolver...</button>
              </div>
              <div className="col-md-3">
                <h4>Funciones Cuadraticas</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                  Nullam vitae lorem eget diam tincidunt vehicula.</p>
                <button type="button" className="btn btn-primary btn-sm">Resolver...</button>
              </div>
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
