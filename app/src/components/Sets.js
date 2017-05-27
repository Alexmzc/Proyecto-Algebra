import React, { Component } from 'react';
var i ='{';
var f ='}';
class Sets extends Component {
  render() {
    return (
      <div className="fadeIn animated">
        <h1>Conjuntos</h1>
        <p>La idea de conjuntos se puede expresar como una colección de 
        elementos o cosas que resultan tener algo en común</p>
        <p>Tal conjunto se representa mediante uso de Llaves ({i} {f}) donde 
        dentro de tales llaves se encontrarán los elementos
        <hr/>Ejemplo: {i} 1,2,3,4 {f}</p><hr/>
        <h4>Existen dos formas de Escrbir un Conjunto:</h4>
        <h5>Por Extensión y por Comprensión.-</h5>
        <hr/>
        <div className="row">
        	<div className="col-md-5 col-md-offset-1">
        		<p><b>Por Extensión:</b> Que significa escribir explicitamente los elementos
				    del conjunto, asi como en el ejemplo anterior donde todos los elementos 
				    se encuentran dentro de las llaves.<hr/>
				    Sea A un conjunto de colores: A = {i} Rojo,Verde,Azul,Amarillo {f} donde se 
				    especifican exactamente la cantidad y cuales colores posee.
				    <hr/>O también .-<hr/>
				    Sea B un conjunto de los 10 primeros números Naturales:<br/>
				    B = {i} 1,2,3,4,5,6,7,8,9,10 {f}</p>
        	</div>
        	<div className="col-md-1"></div>
        	<div className="col-md-4">
        		<p><b>Por Comprensión</b>: significa describir al conjunto deacuerdo
				    a las caracteristicasn de los elementos que posee.<hr/>
				    Por Ejemplo: Sea A un conjunto de Mamiferos: Es decir <br/>A = {i}Mamiferos{f}
				    <br/> Donde <b>Mamiferos</b> hace referencia Todos los Mamiferos, pero sin especificar
				    uno en particular.
				    <hr/>O también .-<hr/>
				    Como se vio en el ejemplo anterior otra forma de escribir al Conjunto 
				    B seria la siguiente:<br/>
				    B = {i} Todos los números desde 1 hasta 10 {f}</p>
        	</div>
        </div><hr/>
        <h4>Los Conjunto pueden ser clasificados de dos formas:</h4>
        <h5>Como Finitos e Infinitos.-</h5>
        <div className="row">
        <div className="col-md-8 col-md-offset-2">
        <p>Siendo los conjutnos Finitos aquellos donde la cantidad de elementos son cantidades
        de elementos precisos como los tradados anteriormente en "La Forma Por Extersión", y los conjuntos 
        que son Infinitos serán aquellos cuyos elementos no pueden ser determinados.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Sets;
