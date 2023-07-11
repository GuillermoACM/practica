import React from 'react'

import './Miguel.scss';

const Miguel = () => {
  return (
    <div className="app__miguel">
        <div className="app__miguel-section">
			<div className="app__miguel-title">
			    <h1>Miguel</h1>
			</div>
			<div className="app__miguel-excerpt">
				<h2> Datos Curiosos</h2>
				
				
				
				<div className="section">
				
							<div className="article-header"></div>	
								<div className="body-article">
									<div className="article-card">
										<h3 className="title-article">POR QUÉ LOS PERROS NO PUEDEN COMER CHOCOLATE</h3>
									</div>
										<p>Los perros no pueden metabolizar la teobromina, un compuesto químico presente en el chocolate, por lo que esta se acumula rápidamente hasta alcanzar niveles tóxicos y puede provocar su muerte.
		</p>
										<p>Los perros al ser incapaces de metabolizar la teobromina (molécula que se encuentra en las semillas de cacao, las nueces de cola y el té) pueden padecer un conjunto de afecciones que van desde daño cardiaco y el sistema nervioso hasta la muerte.
		</p>
										<p>Esta molécula puede afecta a los seres humanos, pero la dosis, a diferencia de los perros, debe ser muy elevada; aunado a esto, el ser humano puede metabolizar dicha sustancia, evitando con esto los efectos adversos provocado por la misma. </p>
									<a className="link"> Ver articulo.</a>
								</div>
							
						
			
				</div>
				
				<div className="cont-ejercicio1">
					<h2>Lorem Ipsum</h2>
					<div className="body-ejercicio1">
						<img src="https://dummyimage.com/300x300/e3a6d1/fff" alt="image 1"/>
						<p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
					</div>

				</div>
				
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
			</div>
		</div>
    </div>
  )
}

export default Miguel;