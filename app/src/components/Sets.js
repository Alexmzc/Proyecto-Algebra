import React, { Component } from 'react';

var i ='{';
var f ='}';
class Sets extends Component {
  render() {
    return (
      <div className="fadeIn animated">
	      <div className="container">
	      	<div className="row">
	      		<h1 className="text-center">Conjuntos</h1>
	        	<div className="col-md-10 col-md-offset-1">
			      	<div>
					      <p>La idea de conjuntos se puede expresar como una colección de 
				      	  elementos o cosas que resultan tener algo en común. Tal conjunto se representa 
				      	  mediante uso de Llaves (<b>{i} {f}</b>) donde dentro de tales llaves se encontrarán 
				      	  los elementos propios del Conjunto.</p>
					      <p><pre className="wh2 tab25em bg-info">      &rarr; Ejemplo: {i} 1,2,3,4 {f}</pre></p>
			        </div>
			      </div>
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
						    <div className="tab3em">
						    	<p>Sea A un conjunto de colores: 
						    	<pre className="wh2 tab15em bg-info">  A = {i} Rojo,Verde,Azul,Amarillo {f}</pre>
						    	Donde se especifican exactamente la cantidad y cuales colores posee.</p>
							    <p >O también .-</p>
							    <p >Sea B un conjunto de los 10 primeros números Naturales:</p>
							    <pre className="wh2 tab20em bg-info">    B = {i} 1,2,3,4,5,6,7,8,9,10 {f}</pre>
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
			        		exacta de elementos que posee.</p>
			        		<p>Otro Ejemplo: <pre className="wh2 tab15em bg-info"> Tenemos B = {i} Colores Primarios {f}</pre> Donde B entonces 
			        		contendra tres elementos que corresponden a <b>Rojo, Verde</b> y <b>Azul</b>.</p>
		        		</div>
		        	</div> 
		        </div> 
		        <div className="row m-top-30">
		        	<div className="col-md-10 col-md-offset-1">
		        		<p><b>Ejemplos de Conjuntos Infinitos</b> podemos encontrar a los siguientes:</p>
		        		<div className="tab3em">
			        		<p><pre className="wh3 tab20em bg-info">Sea A = {i} <b>N</b> {f}    ó también    Sea B = {i} <b>R</b> {f}</pre>
			        		Donde <b>N</b> corresponde a los Números
			        		Naturales, lo que significa que encontraremos números entre <b>1</b> e <b>infito positivo.</b></p>
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
					        <pre className="tab25em wh2 bg-info">     Sea A = {i} 1,2,3,4,5,6 {f}.-</pre>
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
			    	<div className="row m-top-30">
			    		<h4>Subconjuntos: &sub;</h4>
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
			        		<p>Entonces podemos decir que A es subconjunto de B, por que los elementos
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
		        		<p>Encontrar el conjunto de números <b>menores a 1</b> y <b>mayores a 2</b>, tales elementos no Existen
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
				    	<h4>Conjunto Universal: U</h4>
		        	<div className="col-md-10 col-md-offset-1">
		        		<p>Cuando hablamos de Conjunto Universal, cuando nos referimos a aquel conjunto que puede
		        		contener a dos o más de dos conjuntos teniendo como base una caracteristica en común.-</p>
		        		<p> Por Ejemplo.-
		        		<pre className="bg-info">     Sea A = {i} Estudiantes de 8vo año A {f}   ;   Sea B = {i} Estudiantes de 8vo año B {f}   ;   Sea C = {i} Estudiantes de 8vo año C {f}</pre></p>
		        		<p className="tab3em">Donde El conjunto Universal resulta ser:
		        		<pre className="wh2 tab20em bg-info">  U = {i} Estudiantes de 8vo año {f}</pre></p>
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
			    <div>	    
				    <div className="row m-top-30">
			    		<h4>Conjunto Potencia de un Conjunto: <b>P(</b>A<b>)</b></h4>
			    		<div className="col-md-10 col-md-offset-1">
			    			<p>Se refiere a la cantidad de conjuntos que se pueden formar con un mismo conjunto, donde estos conjuntos 
			    			reciben el nombre de subconjuntos del conjunto tratado. Dichos subconjuntos que son elementos se obtienen
			    			por medio de la cardinalidad del conjunto finito tratado, que pasa a ser potencia de la base 2. De esta
			    			forma se obtienen todas las combinaciones posibles.-</p>
			    			<p>Por Ejemplo:
			    			<pre className="wh6 tab8em bg-info">  Sea A = {i} 1,2,4,8 {f}</pre></p>
			    			<p className="tab3em">Se tiene un conjunto <b>A</b> Finito, cuya cardinalidad es <b>4</b>, entonces decimos que dicha cardinalidad pasa
			    			a ser potencia de base <b>2</b> asi obtenemos que 2<sup>4</sup> = 16 posibles combinaciones.-</p>
			    			<table className="tab20em wh3 bg-info table table-bordered table-striped">
									<tr>
										<td>A<sub>1</sub> = {i} &empty; {f}</td>
										<td>A<sub>5</sub> = {i} 8 {f}</td>
										<td>A<sub>9</sub> = {i} 2,4 {f}</td>
										<td>A<sub>13</sub> = {i} 1,2,8 {f}</td>
									</tr>
									<tr>
										<td>A<sub>2</sub> = {i} 1 {f}</td>
										<td>A<sub>6</sub> = {i} 1,2 {f}</td>
										<td>A<sub>10</sub> = {i} 2,8 {f}</td>
										<td>A<sub>14</sub> = {i} 2,4,8 {f}</td>
									</tr>
									<tr>
										<td>A<sub>3</sub> = {i} 2 {f}</td>
										<td>A<sub>7</sub> = {i} 1,4 {f}</td>
										<td>A<sub>11</sub> = {i} 4,8 {f}</td>
										<td>A<sub>15</sub> = {i} 1,4,8 {f}</td>
									</tr>
									<tr>
										<td>A<sub>4</sub> = {i} 4 {f}</td>
										<td>A<sub>8</sub> = {i} 1,8 {f}</td>
										<td>A<sub>12</sub> = {i} 1,2,4 {f}</td>
										<td>A<sub>16</sub> = {i} 1,2,4,8 {f}</td>
									</tr>
								</table>
								<p>Cada uno de estos Subconjuntos pasa a ser un elemento de del conjunto potencia resultante, 
								comenzando siempre por el conjunto vacío primer elemento y como último será el conjunto mismo. </p>
								<p>Como resultado de el Conjunto Potencia de A:
								<pre className="wh2 tab20em bg-info">   Sera: <b>P(</b>A<b>)</b> = {i} A<sub>1</sub> hasta A<sub>16</sub> {f}</pre></p>
			    		</div>
			    	</div>
					</div>
					<hr/>
			    <div className="separator"></div>
			    <hr/>
			    <div>	    
				    <div className="row m-top-30">
							<h4>Unión de Conjuntos: A &cup; B</h4>
							<div className="col-md-10 col-md-offset-1">
								<p>La Unión de dos conjuntos corresponde al conjunto resultante tomando en cuenta a
								todos los elementos que se encunetran tanto en el conjunto <b>A</b> como en el conjunto <b>B</b> y 
								se utiliza el siguiente símbolo para representar una Unión: <b>&cup;</b>.</p>
								<p>Por Ejemplo.-
								<pre className="wh3 tab20em bg-info"> Sea A = {i} 1,2,3,4,5 {f}  y  B = {i} 4,5,6,7 {f}</pre></p>
								<p>Donde podemos darnos cuenta que tenemos los siguiente grupos de elementos:</p>
								<pre className="wh1 tab3em bg-info">
								  Elementos: 1,2,3 ; Pertenecen solo al conjunto A.-<br/>
								  Elementos:  6,7  ; Pertenecen solo al conjunto B.-<br/>
								  Elementos:  4,5  ; Pertenecen tanto a A como a B.-
								</pre>
								<p>Como ya se definió anteriormente, podemos decir que el conjunto Unión entre los conjuntos A y B
								resultan ser <b>todos</b> los elementos que se encuentren en ambos conjuntos tratados:</p>
								<p className="tab3em">Es decir:
								<pre className="wh2 tab15em bg-info">    A &cup; B = {i} 1,2,3,4,5,6,7 {f} </pre></p>
			    		</div>
						</div>
					</div>
					<hr/>
			    <div className="separator"></div>
			    <hr/>
			    <div>	    
				    <div className="row m-top-30">
							<h4>Intersección de Conjuntos: A &cap; B</h4>
							<div className="col-md-10 col-md-offset-1">
								<p>Cuando hablamos de Intersección de Conjuntos nos referiremos a todos aquellos elementos que pertenecen 
								a ambos conjuntos tratados, es decir los elementos a considerar serán los que esten el conjunto A y en el 
								conjunto B, y se utiliza el siguiente símbolo para representarlo: <b>&cap;</b>.</p>
								<p>Ejemplo.-
								<pre className="wh3 tab20em bg-info"> Sea A = {i} 1,2,3,4,5 {f}  y  B = {i} 4,5,6,7 {f}</pre></p>
								<p>Donde podemos darnos cuenta que tenemos los siguiente grupos de elementos:</p>
								<pre className="wh1 tab3em bg-info">
								  Elementos: 1,2,3 ; Pertenecen solo al conjunto A.-<br/>
								  Elementos:  6,7  ; Pertenecen solo al conjunto B.-<br/>
								  Elementos:  4,5  ; Pertenecen tanto a A como a B.-
								</pre>
								<p>Como ya se definió anteriormente, podemos decir que el conjunto de Intersección entre los conjuntos A y B
								resultan ser <b>solo</b> aquellos elementos que pertenescan tanto a <b>A</b> como a <b>B</b>:</p>
								<p className="tab3em">Es decir:
								<pre className="wh6 tab15em bg-info">    A &cap; B = {i} 4,5 {f} </pre></p>
			    		</div>
						</div>
					</div>
					<hr/>
			    <div className="separator"></div>
			    <hr/>
			    <div>	    
				    <div className="row m-top-30">
							<h4>Complemento de un Conjunto: A<b>'</b></h4>
							<div className="col-md-10 col-md-offset-1">
							<p>El Complemento de un Conjunto resulta ser todos aquellos elementos que no pertenescan a dicho conjunto </p>
							<p>Por Ejemplo: Obtener el complemeto del conjunto <b>A</b>, teniendo en cuenta que <b>U</b> corresponde al Universo.-
								<pre className="wh1 tab20em bg-info"> Sea A = {i} 3,4,5,6 {f}   y   U = {i} 1,2,3,4,5,6,7,8,9 {f}</pre></p>
								<p>Entonces comparamos:</p>
								<pre className="wh2 tab3em bg-info">        A = {i} 3,4,5,6 {f}<br/>    U = {i} 1,2,3,4,5,6,7,8,9 {f}</pre>
								<p>Como resultado son todos los elementos que no pertenecen a <b>A</b>:
								<pre className="wh6 tab15em bg-info">   A<b>'</b> = {i} 1,2,7,8,9 {f}</pre></p>
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
