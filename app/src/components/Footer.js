import React, { Component } from 'react';
import pi from './../images/favicon.png';

class Footer extends Component {
  render(){
    return(
      <footer>
        <img src={pi} width="15px" alt="Pi"/>
        <p className="text-center">Desarrollado por Estudiantes de Ingenieria Civil Informática 
        <br/><a href="https://www.uct.cl/">Universidad Catolica de Temuco</a></p>
      </footer>
    )
  }
}

export default Footer;
