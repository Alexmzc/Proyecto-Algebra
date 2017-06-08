import React, { Component } from 'react';

var i ='{';
var f ='}';
class Sets extends Component {
  render() {
    return (
      <div className="fadeIn animated">
	      <div className="container">
	      	<div>
			      <h1>Conjuntos</h1>
			      <p>La idea de conjuntos se puede expresar como una colección de 
		      	  elementos o cosas que resultan tener algo en común</p>
				  	<p>Tal conjunto se representa mediante uso de Llaves ({i} {f}) donde 
			      dentro de tales llaves se encontrarán los elementos propios del Conjunto.
			      </p>
			      <pre className="wh2 bg-info">      &rarr; Ejemplo: {i} 1,2,3,4 {f}</pre>
	        </div>
	        <div className="separator"></div>
	        <hr/>
	        <h4>Existen dos formas de Escrbir un Conjunto:</h4>
	        <h5>Por Extensión y por Comprensión.-</h5>
	        <hr/>
	        <div>
	        	<div className="row">
		        	<div className="col-md-10 col-md-offset-1">
		        		<p><b>Por Extensión:</b> Que significa escribir explicitamente los elementos
						    del conjunto, asi como en el ejemplo anterior donde todos los elementos 
						    se encuentran dentro de las llaves.</p>
						    <div className="tab3em"><p >Sea A un conjunto de colores: A = {i} Rojo,Verde,Azul,Amarillo {f} donde se 
							    especifican exactamente la cantidad y cuales colores posee.</p>
							    <p >O también .-</p>
							    <p >Sea B un conjunto de los 10 primeros números Naturales:</p>
							    <pre className="wh1 tab20em bg-info">         B = {i} 1,2,3,4,5,6,7,8,9,10 {f}</pre>
						    </div>
		        	</div>
	        	</div>
	        	<div className="row">
	        		<div className="col-md-10 col-md-offset-1">
		        		<p><b>Por Comprensión</b>: significa describir al conjunto deacuerdo
						    a las caracteristicas de los elementos que posee.</p>
						    <div className="tab3em"><p >Por Ejemplo: Sea A un conjunto de Mamiferos: Es decir 
						    <pre className="wh2 tab15em bg-info">      A = {i}Mamiferos{f}</pre></p>
							    <p >Donde <b>Mamiferos</b> hace referencia Todos los Mamiferos, pero sin especificar
							    uno en particular.</p>
							    <p >O también .-</p>
							    <p >Como se vio en el ejemplo anterior otra forma de escribir al Conjunto 
							    B seria la siguiente:</p>
							    <pre className="wh1 tab20em bg-info">    B = {i} Todos los números desde 1 hasta 10 {f}</pre>
		        		</div>
		        	</div>
		        </div>
	        </div>
	        <div className="separator"></div>
	        <hr/>
	        <h4>Los Conjunto pueden ser clasificados de dos formas:</h4>
	        <h5>Como Finitos e Infinitos.-</h5>
	        <div>
		        <div className="row">
			        <div className="col-md-10 col-md-offset-1">
				        <p>Siendo los conjuntos Finitos aquellos donde la cantidad de elementos son cantidades
				        de elementos precisos como los tradados anteriormente en "La Forma Por Extersión", y los conjuntos 
				        que son Infinitos serán aquellos cuyos elementos no pueden ser determinados.</p>
			        </div>
		        </div>
		        <div className="row m-top-30">
		        	<div className="col-md-10 col-md-offset-1">
		        		<p><b>Ejemplos de Conjuntos Finitos</b> podemos encontrar a los siguientes:</p>
		        		<div className="tab3em">
		        			<p><pre className="wh2 tab15em bg-info">     Sea A = {i} 1,2,3,4,5,6 {f}</pre> Donde es posible apreciar la cantidad
			        		exacta de elemetos que posee.</p>
			        		<p>Otro Ejemplo: <pre className="wh2 tab15em bg-info"> Tenemos B = {i} Colores Primarios {f}</pre> Donde B entonces 
			        		contendra tres elemetos que corresponden a <b>Rojo, Verde</b> y <b>Azul</b>.</p>
		        		</div>
		        	</div> 
		        </div> 
		        <div className="row m-top-30">
		        	<div className="col-md-10 col-md-offset-1">
		        		<p><b>Ejemplos de Conjuntos Infinitos</b> podemos encontrar a los siguientes:</p>
		        		<div className="tab3em">
			        		<p><pre className="wh2 tab20em bg-info">Sea A = {i} <b>N</b> {f}  ó  Sea B = {i} <b>R</b> {f}</pre>
			        		Donde <b>N</b> corresponde a los Números
			        		Naturales, lo que significa que encontraremos números entre 1 y infito positivo.</p>
			        		<p>Y donde <b>R</b> corresponde a todos los números Reales.</p>
		        		</div>
		        	</div>
		        </div>

		        <div className="row m-top-30">
		        	<div className="col-md-10 col-md-offset-1">
				        <p>Ahora al momento de tratar con Conjuntos Finitos es posible obtener otra caracterica
				        que consiste en determinar su <b>Cardinalidad</b> o número de elementos que posee. Siendo
				        esta acción representada por el signo <b>#</b> junto con el nombre del conjunto:</p>
				        <div className="tab3em">
					        <p>Teniendo en cuenta el ejemplo anterior:
					        <pre className="tab20em wh2 bg-info">     Sea A = {i} 1,2,3,4,5,6 {f}.-</pre>
					        A simple vista vemos que tiene 6 elementos, por lo tanto su Cardinalidad seria 6.</p>
					        <p>Representando ese número de la forma correcta, quedaria así:
					        <pre className="tab20em wh1 bg-info">       #A = 6      o también       &rarr;  |A| = 6.</pre></p>
			        	</div>
			        </div>
		        </div>
					</div>
					<hr/>
					<div className="separator"></div>
					<hr/>
					<div>
						<h4>Subconjuntos:</h4>
			    	<div className="row m-top-30">
		        	<div className="col-md-10 col-md-offset-1">
			        	<p>Cuando hablamos de Subconjuntos nos referiremos a aquel o aquellos conjuntos que forman parte de un Conjunto mas grande. Dicho de otra manera, 
					    	el conjunto B es subconjunto del conjunto A, ya que B siendo conjunto también resulta ser elemento de A.
					    	Por Ejemplo:</p>
			        	<div className="tab3em">
			        		<p>Tenemos los conjuntos
			        		<pre className="tab15em wh3 bg-info">A = {i} Animales {f}   y   B = {i} Mamíferos {f}, </pre>
			        		Entonces podemos decir que el conjunto B es subconjunto
			        		de A, ya que todos los Mamíferos son Animales.</p>
			        		<p>Otro ejemplo seria el siguiente: </p>
			        		<p>Tenemos los conjuntos <pre className="tab15em wh3 bg-info"> A = {i} 1,2,3,4,5 {f}    y    B = {i} <b>N</b> {f}</pre>
			        		Tal que <b>N</b> son todos los Números Naturales, desde el 1 al 
			        		infito positivo.</p>
			        		<p>Entonces podemos decir que A es subconjunto de B, por que los elemetos
			        		que se encunetran en A tambien se encuantran en B.</p>
				        </div>
				        <p>Pero cuidado, que si al decir que B es un subconjunto de A no significa que A sea 
			        	subconjunto de B, ya que en el ejemplo dado podemos facilmente darnos cuenta que</p>
			        	<pre className="tab3em bg-info">       Siendo todo Mamífero un Animal, no todo Animal es Mamífero &rarr; por ejemplo un Ave 
			        	es Animal pero no es Mamífero. </pre>
			        	<p>La Espresión de subconjunto de denota con el siguiente símbolo:<b> &sub; </b><br/>
			        	<pre className="wh2 tab15em bg-info"> A <b>&sub;</b> B     o también     A <b>&sube;</b> B.</pre></p>
			        </div>
			      </div>
					</div>
					<hr/>
		    	<div className="separator"></div>
		    	<hr/>
					<div className="row m-top-30">
						<h4>Conjuntos Iguales:</h4>
	        	<div className="col-md-10 col-md-offset-1">
	        		<p>Dos conjuntos son Iguales si y solo si, los elementos del conjutno A se encuentran
	        		también en el conjunto B, y viceversa.</p>
	        		<p>En otras palabras.- 
	        		<pre className="wh3 tab15em bg-info">   A = B     &hArr;     A &sub; B   y   B &sub; A.</pre></p>
	        		<p>Ejemplo.-
	        		<pre className="wh4 tab3em bg-info">
	        			Sea A = {i} x &isin; <b>N</b> / 1 {'<'} x {'<'} 6 {f}      y      B = {i} x &isin; <b>N</b> / 2 &le; x &le; 5 {f}
	        		</pre>
	        		</p>
	        		<p>Siendo entonces que
	        		<pre className="wh1 tab15em bg-info">   A = {i} 2, 3, 4, 5 {f}    y    B = {i} 2, 3, 4, 5 {f}</pre></p>
	        	</div>
		    	</div>

		    	<hr/>
		    	<div className="separator"></div>
		    	<hr/>
		    	<div className="row m-top-30">
		    		<h4>Conjuntos Disjuntos:</h4>
	        	<div className="col-md-8 col-md-offset-1">
	        		<p>Dos conjuntos son Disjuntos, cuando no existe si quiera un elemento identico en los conjuntos tratados.</p>
	        		<p>En otras palabras.- 
	        		<pre className="wh3 tab15em bg-info">   A &ne; B     &hArr;     A &nsub; B   y   B &nsub; A.</pre></p>
	        		<p> Por Ejemplo.-
	        		<pre className="wh2 tab20em bg-info">A = {i} 1, 2, 3 {f} y B = {i} 4, 5, 6 {f}.</pre></p>
	        	</div><hr/>
	        </div>
	        <hr/>
		    	<div className="separator"></div>
		    	<hr/>
			    <div>
				    <div className="row m-top-30">
				    	<h4>Conjunto Vacío: &empty;</h4>
		        	<div className="col-md-10 col-md-offset-1">
		        		<p>Llamamos a un conjunto vacío a aquel cuya cardinalidad es 0, es decir
		        		no contiene elementos. Este tipo de conjunto se usa para referirse a situaciones
		        		en las que es imposible encontrar elementos dentro de un rango, por ejemplo:</p>
		        		<p>Encontrar el conjunto de números <b>menores a 1</b> y <b>mayores a 2</b>, tales elemetos no Existen
		        		por lo tanto se denomina que es un conjunto Vacío, y se denota de la siguiente forma.-
		        		<pre className="wh2 tab20em bg-info">        &empty; = {i} {f}, &rarr; #&empty; = 0.</pre></p>
		        	</div>
				    </div>
					</div>
		    	<hr/>
		    	<div className="separator"></div>
		    	<hr/>
	        <div>	    
			    	<div className="row m-top-30">
			    		<h4>Conjunto Unitanio:</h4>
		        	<div className="col-md-10 col-md-offset-1">
		        		<p>Cuando hablamos de Conjunto Unitanio, nos referiremos a aquel conjunto cuya 
		        		cardinalidad resulta ser uno "1", es decir éste conjunto esta formado por uno
		        		y solo un elemento.</p>
		        		<p>Por Ejemplo:</p>
		        		<p className="tab3em">Sea M un conjunto formado por aquellos números Naturales <b>menores que 5</b> y <b>mayores que 3</b>.-</p>
		        		<p>En otras palabras: <pre className="wh2 tab20em bg-info">     M = {i} x &isin; <b>N</b>/ 3 {'<'} x {'<'} 5 {f}</pre>
		        		Donde dicho número resultante será: 4, siendo éste el único elemento de M.-</p>
		        		<pre className="wh5 tab25em bg-info">   M = {i} 4 {f}.</pre>
		        	</div>
			    	</div>
					</div>
		    	<hr/>
		    	<div className="separator"></div>
		    	<hr/>
		    	<div>	    
				    <div className="row m-top-30">
				    	<h4>Conjunto Universal:</h4>
		        	<div className="col-md-10 col-md-offset-1">
		        		<p>Cuando hablamos de Conjunto Universal, cuando nos referimos a aquel conjunto que puede
		        		contener a dos o más de dos conjuntos teniendo como base una caracteristica en común.-</p>
		        		<p> Por Ejemplo.-
		        		<pre className="bg-info">     Sea A = {i} Estudiantes de 8vo año A {f} ; Sea B = {i} Estudiantes de 8vo año B {f} ; Sea C = {i} Estudiantes de 8vo año C {f}</pre></p>
		        		<p className="tab3em">Donde El conjunto Universal resulta ser:
		        		<pre className="wh2 tab20em bg-info">U = {i} Estudiantes de 8vo año {f}</pre></p>
		        	</div>
				    </div>
					</div>
			    <hr/>
			    <div className="separator"></div>
			    <hr/>
			    <div>	    
				    <div className="row m-top-30">
				    	<h4>Diferencia de Conjuntos: A - B</h4>
		        	<div className="col-md-10 col-md-offset-1">
		        		<p>La diferencia entre dos Conjuntos A y B, corresponde al conjunto de todos aquellos elementos
		        		que pertenecen al conjunto A pero que no pertenecen al conjunto B.-</p>
		        		<p className="tab3em"> Por Ejemplo.-
		        		<pre className="wh1 tab15em bg-info">Sea A = {i} 1, 2, 3, 4, 5 {f} ; Sea B = {i} 4, 5, 6 {f}</pre>
		        		</p>
		        		<p className="tab3em">Donde El conjunto resultante corresponde a:
		        			<pre className="wh2 tab20em bg-info">      A - B = {i} 1, 2, 3 {f}</pre></p>
		        	</div>
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
