import React from 'react'

import './Albani.scss';

const Albani = () => {
  return (
    <div className="app__albani">
        <div className="app__albani-section">
			<div className="app__albani-title">
			    <h1>Albani</h1>
			</div>
			
			<div className="app__albani-excerpt">
				
				<div className="container-about">
				
					<div className="container-photo">
					
						<img className="about-photo" src="https://via.placeholder.com/250x250"/>
						<h3 className="about-title">Justin Drew Bieber</h3>
						
					</div>
					
					<div className="container-bio">						
					
						<div className="container-skills">
						
							<ul className="about-skills">
								<li>
										<img src="https://via.placeholder.com/100x100" />
										<span>Habilidad</span>
								</li>
								<li>
									<img src="https://via.placeholder.com/100x100" />
									<span>Habilidad</span>
								</li>
								<li>
									<img src="https://via.placeholder.com/100x100" />
									<span>Habilidad</span>
								</li>
							</ul>
							
						</div>
					
						<p className="about-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat vitae felis quis lobortis. Praesent blandit elit id tempus feugiat. Aliquam lobortis diam quam, eget scelerisque mauris posuere quis. Duis maximus orci at massa dictum consectetur. Duis et quam facilisis, dapibus nibh eget, viverra velit. Nullam nibh augue, porta venenatis mi vitae, sodales molestie quam. Nam et orci lacus. </p>
						
					</div>
					
				</div>
				
			</div>
		</div>
    </div>
  )
}

export default Albani;