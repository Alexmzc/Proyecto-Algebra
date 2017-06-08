import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
          <h4>¿Que son los conjuntos?</h4>
          <p>La idea de conjuntos se puede expresar como una colección de
          elementos o cosas que resultan tener algo en común.</p>
          <Link to="/sets" className="btn btn-primary btn-sm">Ver mas información...</Link>
        </div>
        <div className="col-md-4">
          <h4>Resuelve Lógica Proposicional</h4>
          <p>Resuelve tus problemas de Lógica Proposicional usandando esta útil calculadora
          donde encontraras todas las operaciónes lógica necesarias para construir tu Tabla
          de Verdad junto con su Nivel de Verdad.</p>
          <Link to="/logic" className="btn btn-primary btn-sm">Resolver Logíca Proposicional...</Link>
        </div>
      </div>
    );
  }
}

export default Home;
