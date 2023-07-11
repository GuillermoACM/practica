import React from 'react'

import './Nelson.scss';

const Nelson = () => {
  return (
    <div className="app__nelson">
        <div className="app__nelson-section">
			<div className="app__nelson-title">
			    <h1>Nelson</h1>
			</div>
			
			
			<div className="primario">
				<h1>Estrellas</h1>
			
				<div className="secundario">
					<img src= "https://dummyimage.com/280x200/000/000fe3"/>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam massa, tempor ac lacus vel, pulvinar maximus magna. Nullam scelerisque magna vitae massa aliquam pretium. Etiam a odio eget felis pharetra congue at nec metus. Cras vitae varius ex.</p>
				</div>
			</div>
			
		</div>
    </div>
  )
}

export default Nelson;