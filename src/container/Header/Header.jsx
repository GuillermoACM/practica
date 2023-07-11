import React from 'react'

import './Header.scss';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className="app__header">
			<div className="app__header-colors d-flex flex-row">
				<div className="app__header-title-primary mx-auto">
			    <h1>Primary Color</h1>
				</div>
				<div className="app__header-title-secondary mx-auto">
					<h1>Secondary Color</h1>
				</div>
				<div className="app__header-title-tertiary mx-auto">
					<h1>Tertiary Color</h1>
				</div>
			</div>
			
			<div className="app__header-ejercicio3">
				<div className="container d-flex justify-content-around flex-wrap">
					<div className="app__header-card container d-flex flex-column">
						<img className="" src="https://via.placeholder.com/250x250" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus suscipit lorem, sed condimentum tellus. Etiam venenatis lorem et urna interdum consectetur. Praesent a quam tincidunt, tincidunt velit in, tempor ligula. Maecenas posuere arcu et nunc scelerisque blandit.</p>
					</div>
					<div className="app__header-card container d-flex flex-column">
						<img className="" src="https://via.placeholder.com/250x250" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus suscipit lorem, sed condimentum tellus. Etiam venenatis lorem et urna interdum consectetur. Praesent a quam tincidunt, tincidunt velit in, tempor ligula. Maecenas posuere arcu et nunc scelerisque blandit.</p>
					</div>
					<div className="app__header-card container d-flex flex-column">
						<img className="" src="https://via.placeholder.com/250x250" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus suscipit lorem, sed condimentum tellus. Etiam venenatis lorem et urna interdum consectetur. Praesent a quam tincidunt, tincidunt velit in, tempor ligula. Maecenas posuere arcu et nunc scelerisque blandit.</p>
					</div>
				</div>
			</div>
			
			<div className="app__header-esquema">
				<img className="esquema01" src={images.esquema02} />
			</div>
			
    </div>
  )
}

export default Header;