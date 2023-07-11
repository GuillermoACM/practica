import React from 'react'

import './Nelson.scss';

const Nelson = () => {
  return (
    <div className="app__nelson">
        <div className="app__nelson-section">
			<div className="app__nelson-title">
			    <h1>Nelson</h1>
			</div>
			<div className="app__nelson-excerpt">
			
			
			    <li> <img src="https://dummyimage.com/280x200/000/000fe3" alt="Nova"/> <span> Nova clásica: colapso de estrella con 5 veces la masa del sol </span> </li>
				
				<li> <img src="https://dummyimage.com/280x200/000/000fe3" alt="Supernova"/> <span> Supernovas: colapso de estrella con 15 veces la masa del sol </span> </li>
				
				<li> <img src="https://dummyimage.com/280x200/000/000fe3" alt="Hiprernova"/> <span> hipernovas: colapso de estrella con 15 veces la masa del sol </span> </li>
				
				
			</div>
			
		</div>
    </div>
  )
}

export default Nelson;