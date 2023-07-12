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
					
						<p className="about-bio"></p>
						
						<div className="container-skills">
						
							<ul className="about-skills">
								<li>
									<img src="https://via.placeholder.com/100x100" />
								</li>
								<li>
									<img src="https://via.placeholder.com/100x100" />
								</li>
								<li>
									<img src="https://via.placeholder.com/100x100" />
								</li>
							</ul>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
		</div>
    </div>
  )
}

export default Albani;