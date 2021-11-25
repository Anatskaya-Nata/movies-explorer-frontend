import './PageNotFound.css'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound(props) {
	return (
		<div className='error'>
			<h2 className='error__title'>404</h2>
			<h2 className='error__subtitle'> Страница не найдена </h2>

			<Link to='/' className='error__back'>
				Назад
			</Link>
		</div>
	)
}

export default PageNotFound
