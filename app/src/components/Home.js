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
            <div className="col-md-offset-3 col-md-6">
              <h4>Conjuntos</h4>
              <p>En esta sección podras encontrar a lo largo de la materia los conceptos y ejemplos 
              necesarios para que puedas llegar a entender la materia de Conjuntos y asi también poder 
              resolver tus dudas y mejorar tu aprendizaje...</p>
              <Link to="/sets" className="btn btn-primary btn-sm">Ver mas información...</Link>
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
            <div className="col-md-offset-3 col-md-6">
              <h4>Logica Proposicional</h4>
              <p>En esta sección te facilitamos una interactiva y útil calculadora con la cual 
              podras desarrollar sin problemas tus ejercicios de Lógica Proposicional, junto con
              algunos tips que nunca estan de más...</p>
              <Link to="/logic" className="btn btn-primary btn-sm">Resolver...</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
