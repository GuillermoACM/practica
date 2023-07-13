import React from 'react'

import './Miguel.scss';
import { images } from '../../constants';
const Miguel = () => {
  return (
    <div className="app__miguel">
        <div className="app__miguel-section">
			<div className="app__miguel-title">
			    <h1>Miguel</h1>
			</div>
			<div className="app__miguel-excerpt">
				<h2> Datos Curiosos</h2>
				
				
			                	/*  SECCION DE DATOS CURIOSOS*/
				<div className="section d-flex flex-row flex-wrap justify-content-center container">
				
							
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.carro} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Conducir un coche sucio en Rusia está prohibido. Si bien es de sentido común mantener limpio el coche para mejorar tu visibilidad, en este país la policía dictamina cuál es el nivel de suciedad sancionable, siendo más alto si no se ve bien la matrícula.</p>
							
						  </div>
						</div>
					  </div>
					</div>
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.piramides} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Sudán es el país con más pirámides que Egipto. Cuenta con 255 de estas edificaciones, las cuales fueron construidas entre los años 1070 a.C y 350 d.C, mientras que Egipto solo tiene 138.</p>
							
						  </div>
						</div>
					  </div>
					</div>
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.castillo} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Al-Khazneh (El tesoro de Petra), es una construcción a mitad del desierto en Jordania. Tiene casi 12 pisos de altura. Su nombre, ‘tesoro’, es por una simple y sencilla razón: en el pasado se creía que en este imponente lugar se guardaban todo tipo de tesoros. Hasta la fecha, esos tesoros nunca se encontraron.</p>
							
						  </div>
						</div>
					  </div>
					</div>
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.estrellamar} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Las sanguijuelas son hermafroditas con 32 cerebros, nueve pares de testículos y una mandíbula con tres hileras de 100 dientes cada una.</p>
							
						  </div>
						</div>
					  </div>
					</div>
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.molino} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Los molinos de viento siempre giran al contrario de las manecillas del reloj, excepto en Irlanda. Si las aspas están giradas hacia un lado (de la vertical hacia la derecha), el molino girará en sentido contrario a las agujas del reloj. Este tipo de construcción de aspas lo podemos ver en la mayoría de los molinos del mundo. Sin embargo, en Irlanda, ese ángulo de inclinación de las aspas de sus molinos, es la contraria (de la vertical hacia la izquierda) y por eso giran para el otro lado.</p>
							
						  </div>
						</div>
					  </div>
					</div>
					<div className="card mt-3 mb-3 col-11 bg-success  " >
					  <div className="row g-0">
						<div className="col-md-4">
						  <img src={images.perro} className="img-fluid rounded-start" alt="carro"/>
						</div>
						<div className="col-md-8">
						  <div className="card-body">
						
							<p className="card-text text-start">Cada año, desde el año 2000, se celebra el concurso ‘perros más feos del mundo’, en California, Estados Unidos. El objetivo del concurso no es humillar a los perros, sino más bien promover la adopción de mascotas sin importar su aspecto.</p>
							
						  </div>
						</div>
					  </div>
					</div>
						
			
				</div>
				
				                         /*EJERCICIO 1 */
				
				<div className="cont-ejercicio1">
					<h2>Lorem Ipsum</h2>
					<div className="body-ejercicio1">
						<img src="https://dummyimage.com/300x300/e3a6d1/fff" alt="image 1"/>
						
					</div>

				</div>
				
				                 /*EJERCICIO 2 USANDO FLEXBOX CON BOOTSTRAP */
				
				<div className="container flex-wrap d-flex mt-4 bg-danger justify-content-evenly p-4">
					<div className="card m-1  col-4" style={{width:"15rem"}}>
						  <img src="https://dummyimage.com/200x150/e3a6d1/fff" className="card-img-top" alt="image"/>
						  <div className="card-body">
							<p className="card-text"> quick example  to build on the card title and make up the bulk  the card's content.</p>
						  </div>
					</div>	
					<div className="card m-1 col-4" style={{width:"15rem"}}>
						  <img src="https://dummyimage.com/200x150/e3a6d1/fff" className="card-img-top" alt="image"/>
						  <div className="card-body">
							<p className="card-text"> quick example  to build on the card title and make up the bulk  the card's content.</p>
						  </div>
					</div>	
					<div className="card m-1 col-4" style={{width:"15rem"}}>
						  <img src="https://dummyimage.com/200x150/e3a6d1/fff" className="card-img-top" alt="image"/>
						  <div className="card-body">
							<p className="card-text"> quick example  to build on the card title and make up the bulk  the card's content.</p>
						  </div>
					</div>	
					
				</div>
				
				        
				
				<div className="container-about">
				
					<div className="container-photo"> 
					
						<img className="image" src={images.perro} />
						<h2>LOREM IPSUM</h2>
					</div>
					<div className="container-bio">	
						<h3>Vida de Nelson</h3>
						<p className="bio">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
						
					</div>
					<div className="container-skills">
						
							<ul className="about-skills">
								<li className="lista">
									<img className="icono" src={images.html}/>
									<span>HTML</span>
								</li>
								<li className="lista">
									<img className="icono" src={images.css}/>
									<p> CSS</p>
								</li>
								<li className="lista">
									<img className="icono" src={images.javascript} />
									<p> javasCript</p>
								</li>
							</ul>
							
					</div>	
				</div>
				
				
				    <div className="padre">
						<div className="hijo hijo1">hijo1</div>
						<div className="hijo hijo2">hijo2</div>
						<div className="hijo hijo3">hijo3</div>
						
						
					</div>
				
				
				
			</div>
		</div>
    </div>
  )
}

export default Miguel;