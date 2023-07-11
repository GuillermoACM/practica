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
			
			<div className="app__header-esquema">
				<img className="esquema01" src={images.esquema02} />
			</div>
    </div>
  )
}

export default Header;