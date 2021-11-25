import React from 'react'
import './NotFoundMovies.css'

function NotFoundMovies({ isErrorMessage }) {
	return (
		<section className='notfound-movies'>
			<div className='notfound-movies__container'>
				<h4 className='notfound-movies__title'>
					{isErrorMessage
						? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
						: 'Ничего не найдено.'}
				</h4>
			</div>
		</section>
	)
}

export default NotFoundMovies
