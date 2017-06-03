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
        </p>
        <pre className="wh2">      &rarr; Ejemplo: {i} 1,2,3,4 {f}</pre>
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
				    Sea B un conjunto de los 10 primeros números Naturales:
				    <pre className="wh2">   B = {i} 1,2,3,4,5,6,7,8,9,10 {f}</pre></p>
        	</div>
        	<div className="col-md-1"></div>
        	<div className="col-md-4">
        		<p><b>Por Comprensión</b>: significa describir al conjunto deacuerdo
				    a las caracteristicas de los elementos que posee.<hr/>
				    Por Ejemplo: Sea A un conjunto de Mamiferos: Es decir <pre className="wh2">      A = {i}Mamiferos{f}</pre>
				    <br/> Donde <b>Mamiferos</b> hace referencia Todos los Mamiferos, pero sin especificar
				    uno en particular.
				    <hr/>O también .-<hr/>
				    Como se vio en el ejemplo anterior otra forma de escribir al Conjunto 
				    B seria la siguiente:
				    <pre className="wh1">    B = {i} Todos los números desde 1 hasta 10 {f}</pre></p>
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
	        		<b>Ejemplos de Conjuntos Finitos</b> podemos encontrar a los siguientes:
	        		<pre className="wh2">     Sea A = {i} 1,2,3,4,5,6 {f}</pre> donde es posible apreciar la cantidad
	        		exacta de elemetos que posee.<hr/>
	        		Otro Ejemplo: <pre className="wh2"> Tenemos B = {i} Colores Primarios {f}</pre> donde B entonces 
	        		contendra tres elemetos que corresponden a <b>Rojo, Verde</b> y <b>Azul</b>.
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
			        esta acción representada por el signo <b>#</b> junto con el nombre del conjunto:		        
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
			        <pre> #A = 6      o también       &rarr;  |A| = 6.</pre>
		        </div>
		    </div>
		</div>
		<hr/>
		<div className="separator"></div>
		<hr/>
		<h4>Subconjuntos:</h4>
		<div>
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
	        		Tenemos los conjuntos <pre> A = {i} 1,2,3,4,5 {f}    y    B = {i} <b>N</b> {f}</pre>
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
		        	<pre>A <b>&sub;</b> B     o también     A <b>&sube;</b> B.</pre>
		        </div>
		    </div>
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		<h5>Conjuntos Iguales:</h5>
	        		Dos conjuntos son Iguales si y solo si, los elementos del conjutno A se encuentran
	        		también en el conjunto B, y viceversa.
	        	</div><hr/>
	        	<div className="col-md-6 col-md-offset-3">
	        		En otras palabras.- 
	        		A = B &hArr; A &sub; B y B &sub; A.
	        		<p>
	        		Ejemplo.-
	        		<pre>
	        			Sea A = {i} x &isin; <b>N</b> / 1 {'<'} x {'<'} 6 {f}      y      B = {i} x &isin; <b>N</b> / 2 &le; x &le; 5 {f}
	        		</pre>
	        		</p>
	        		<p>
	        		Siendo entonces que, A = {i} 2, 3, 4, 5 {f}    y    B = {i} 2, 3, 4, 5 {f}
	        		</p>
	        	</div>
		    </div>
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		<h5>Conjuntos Disjuntos:</h5>
	        		Dos conjuntos son Disjuntos, cuando no existe si quiera un elemento identico en los conjuntos tratados.
	        		<br/> Por Ejemplo.-
	        		<pre className="wh2">A = {i} 1, 2, 3 {f} y B = {i} 4, 5, 6 {f}.</pre>
	        	</div><hr/>
	        </div>
		</div>
		<hr/>
	    <div className="separator"></div>
	    <hr/>
	    <h4>Conjunto Vacío: &empty;</h4>
	    <div>	    
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		Llamamos a un conjunto vacío a aquel en cuya cardinalidad es 0, es decir
	        		no contiene elementos. Este tipo de conjunto se usa para referirse a situaciones
	        		en las que es imposible encontrar elementos dentro de un rango, por ejemplo:<hr/>
	        		Encontrar el conjunto de números menores a 1 y mayores a 2, tales elemetos no Existen
	        		por lo tanto se denomina que es un conjunto Vacío, y se denota de la siguiente forma.-<hr/>
	        		<pre className="wh2">        &empty; = {i} {f}, &rarr; #&empty; = 0.</pre>
	        	</div>
		    </div>
		</div>
	    <hr/>
	    <div className="separator"></div>
	    <hr/>
        <h4>Conjunto Unitanio:</h4>
	    <div>	    
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		Cuando hablamos de Conjunto Unitanio, nos referiremos a aquel conjunto cuya 
	        		cardinalidad resulta ser uno "1", es decir éste conjunto esta formado por uno
	        		y solo un elemento.
	        		Por Ejemplo:<hr/>
	        		Sea M un conjunto formado por aquellos números Naturales menores que 5 y mayores que 3.-<br/>
	        		En otras palabras: <pre className="wh2">     M = {i} x &isin; <b>N</b>/ 3 {'<'} x {'<'} 5 {f}</pre>
	        		Donde dicho número resultante será: 4, siendo éste el único elemento de M.-<br/>
	        		M = {i} 4 {f}
	        	</div>
		    </div>
		</div>
	    <hr/>
	    <div className="separator"></div>
	    <hr/>
	    <h4>Conjunto Universal:</h4>
	    <div>	    
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		Cuando hablamos de Conjunto Universal, cuando nos referimos a aquel conjunto que puede
	        		contener a dos o más de dos conjuntos teniendo como base una caracteristica en común.-
	        		<br/> Por Ejemplo.-
	        		<pre>  Sea A = {i} Estudiantes de 8vo año A {f} ; Sea B = {i} Estudiantes de 8vo año B {f} ; Sea C = {i} Estudiantes de 8vo año C {f}</pre>
	        		<p>
	        			Donde El conjunto Universal resulta ser:<br/>
	        			U = {i} Estudiantes de 8vo año {f}
	        		</p>
	        	</div>
		    </div>
		</div>
	    <hr/>
	    <div className="separator"></div>
	    <hr/>
	    <h4>Diferencia de Conjuntos: A - B</h4>
	    <div>	    
		    <div className="row m-top-30">
	        	<div className="col-md-8 col-md-offset-2">
	        		La diferencia entre dos Conjuntos A y B, corresponde al conjunto de todos aquellos elementos
	        		que pertenecen al conjunto A pero que no pertenecen al conjunto B.-
	        		<br/> Por Ejemplo.-
	        		<pre className="wh1">
	        			Sea A = {i} 1, 2, 3, 4, 5 {f} ;
	        			Sea B = {i} 4, 5, 6 {f}
	        		</pre>
	        		<p>
	        			Donde El conjunto resultante corresponde a:<br/>
	        			A - B = {i} 1, 2, 3 {f}
	        		</p>
	        	</div>
		    </div>
		</div>
	    <hr/>
	    <div className="separator"></div>
	    <hr/>
      </div>
    );
  }
}

export default Sets;
