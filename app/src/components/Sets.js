import React, { Component } from 'react';

var i ='{';
var f ='}';
class Sets extends Component {
  render() {
    return (
      <div className="fadeIn animated">
      	<div>
        <h1>Conjuntos</h1>
        <p>La idea de conjuntos se puede expresar como una colección de 
        elementos o cosas que resultan tener algo en común</p>
        <p>Tal conjunto se representa mediante uso de Llaves ({i} {f}) donde 
        dentro de tales llaves se encontrarán los elementos propios del Conjunto.
        <hr/>&rarr; Ejemplo: {i} 1,2,3,4 {f}</p>
        </div>
        <div className="separator"></div>
        <hr/>
        <h4>Existen dos formas de Escrbir un Conjunto:</h4>
        <h5>Por Extensión y por Comprensión.-</h5>
        <hr/>
        <div>
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
				    a las caracteristicas de los elementos que posee.<hr/>
				    Por Ejemplo: Sea A un conjunto de Mamiferos: Es decir <br/>A = {i}Mamiferos{f}
				    <br/> Donde <b>Mamiferos</b> hace referencia Todos los Mamiferos, pero sin especificar
				    uno en particular.
				    <hr/>O también .-<hr/>
				    Como se vio en el ejemplo anterior otra forma de escribir al Conjunto 
				    B seria la siguiente:<br/>
				    B = {i} Todos los números desde 1 hasta 10 {f}</p>
        	</div>
        	</div>
        </div>
        <div className="separator"></div>
        <hr/>
        <h4>Los Conjunto pueden ser clasificados de dos formas:</h4>
        <h5>Como Finitos e Infinitos.-</h5>
        <div>
	        <div className="row">
		        <div className="col-md-8 col-md-offset-2">
		        <p>Siendo los conjuntos Finitos aquellos donde la cantidad de elementos son cantidades
		        de elementos precisos como los tradados anteriormente en "La Forma Por Extersión", y los conjuntos 
		        que son Infinitos serán aquellos cuyos elementos no pueden ser determinados.</p>
		        </div>
	        </div>
	        <div className="row m-top-30">
	        	<div className="col-md-4 col-md-offset-2">
	        		<b>Ejemplos de Conjuntos Finitos</b> podemos encontrar a los siguientes:<hr/>
	        		Sea A = {i} 1,2,3,4,5,6 {f}, donde es posible apreciar la cantidad
	        		exacta de elemetos que posee.<hr/>
	        		Otro Ejemplo: <br/>Tenemos B = {i} Colores Primarios {f}, donde B entonces 
	        		contendra tres elemetos que corresponden a Rojo, Verde y Azul.
	        	</div> 
	        	<div className="col-md-4">
	        		<b>Ejemplos de Conjuntos Infinitos</b> podemos encontrar a los siguientes:<hr/>
	        		Sea A = {i} <b>N</b> {f}, donde <b>N</b> corresponde a los Números
	        		Naturales, lo que significa que encontraremos números entre 1 y infito positivo.
	        	</div>
	        </div>
	        <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
			        Ahora al momento de tratar con Conjuntos Finitos es posible obtener otra caracterica
			        que consiste en determinar su <b>Cardinalidad</b> o número de elementos que posee. Siendo
			        esta acción representada por el signo <b>#</b> junto con el nombre del conjunto:<hr/>		        
		        </div>
	        </div>
	        <div className="row m-top-30">
	        	<div className="col-md-4 col-md-offset-2">
	        		Teniendo en cuenta el ejemplo anterior:<br/>
			        Sea A = {i} 1,2,3,4,5,6 {f}.-<br/>
			        A simple vista vemos que tiene 6 elementos, por lo tanto su Cardinalidad seria
			        6.
		        </div>
		        <div className="col-md-4">
		        	Representando ese número de la forma correcta, quedaria así:<br/>
			        <hr/> #A = 6 o también   &rarr;  |A| = 6.
		        </div>
		    </div>
		    <hr/>
		    <div className="separator"></div>
		    <hr/>
		    <h4>Subconjuntos.-</h4>
		    <div className="row m-top-30">
		    	<div className="col-md-8 col-md-offset-2">
		    	Cuando hablamos de Subconjuntos nos referiremos a aquel o aquellos conjuntos que forman parte de un Conjunto mas grande. Dicho de otra manera, 
		    	el conjunto B es subconjunto del conjunto A, ya que B siendo conjunto también resulta ser elemento de A.
		    	Por Ejemplo:
		    	</div>
		    </div>
		    <div className="row m-top-30">
	        	<div className="col-md-4 col-md-offset-2">
	        		Tenemos los conjuntos, <br/> 
	        		A = {i} Animales {f} y B = {i} Mamíferos {f}, <hr/>
	        		Entonces podemos decir que el conjunto B es subconjunto
	        		de A, ya que todos los Mamíferos son Animales.
	        		<hr/>
	        		Otro ejemplo seria el siguiente: <br/>
	        		Tenemos el conjunto A = {i} 1,2,3,4,5 {f} y B = {i} <b>N</b> {f}
	        		tal que <b>N</b> son todos los Números Naturales, desde el 1 al 
	        		infito positivo.<hr/>
	        		Entonces podemos decir que A es subconjunto de B, por que los elemetos
	        		que se encunetran en A tambien se encuantran en B.

		        </div>
		        <div className="col-md-4">
		        	Pero cuidado, que si al decir que B es un subconjunto de A no significa que A sea 
		        	subconjunto de B, ya que en el ejemplo dado podemos facilmente darnos cuenta que<hr/>
		        	Siendo todo Mamífero un Animal, no todo Animal es Mamífero &rarr; por ejemplo un Ave 
		        	es Animal pero no es Mamífero. <hr/>
		        	La Espresión de subconjunto de denota con el siguiente símbolo:<b> &sub; </b><br/>
		        	A <b>&sub;</b> B o también A <b>&sube;</b> B.
		        </div>
		    </div>
		    <hr/>
		    <div className="separator"></div>
		    <hr/>
		    <h4>Conjunto Vacío: &empty;</h4>
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		Llamamos a un conjunto vacío a aquel en cuya cardinalidad es 0, es decir
	        		no contiene elementos. Este tipo de conjunto se usa para referirse a situaciones
	        		en las que es imposible encontrar elementos dentro de un rango, por ejemplo:<hr/>
	        		Encontrar el conjunto de números menores a 1 y mayores a 2, tales elemetos no Existen
	        		por lo tanto se denomina que es un conjunto Vacío, y se denota de la siguiente forma.-<hr/>
	        		&empty; = {i} {f}, &rarr; #&empty; = 0.
	        	</div>
		    </div>
		    <hr/>
		    <div className="separator"></div>
		    <hr/>
        </div>
      </div>
    );
  }
}

export default Sets;
