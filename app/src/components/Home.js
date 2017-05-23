import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
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
              <p>Lorem ipsum dasdsadsadset, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <Link to="/sets" className="btn btn-primary btn-sm">Ver mas información...</Link>
            </div>
            <div className="col-md-3">
              <h4>Función Polinomial</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <Link to="/polynomial" className="btn btn-primary btn-sm">Ver mas información...</Link>
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
              <Link to="/logic" className="btn btn-primary btn-sm">Resolver...</Link>
            </div>
            <div className="col-md-3">
              <h4>Funciones Cuadraticas</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim nulla, vitae consectetur ante.
                Nullam vitae lorem eget diam tincidunt vehicula.</p>
              <Link to="/cuadratic" className="btn btn-primary btn-sm">Resolver...</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
