import './PageNotFound.css'
import React from 'react'

function PageNotFound(props) {
	return (
		<div className='error'>
			<h2 className='error__title'>404</h2>
			<h2 className='error__subtitle'>Страница не найдена</h2>
			<div className='error__back'>Назад</div>
		</div>
	)
}

export default PageNotFound
