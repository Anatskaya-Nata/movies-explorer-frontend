import './MoviesCard.css'
import React from 'react'

function MoviesCard(props) {
	const isSavedMovie = props.savedUserMovies.some((i) => i.nameRU === props.movie.nameRU)

	function getTimeFromMins(mins) {
		const hours = Math.trunc(mins / 60)
		const minutes = mins % 60
		return hours + 'ч ' + minutes + 'м'
	}

	const movieSaveButtonClassName = `${isSavedMovie && 'movies__shot_choice-active'}`

	function handleClickSavedMovie() {
		if (isSavedMovie) {
			props.savedUserMovies.forEach((savedMovie) => {
				if (savedMovie.nameRU === props.movie.nameRU) {
					props.onMovieDelete(savedMovie._id)
				}
			})
		} else {
			props.onMovieSave({
				country: props.movie.country,
				movieId: props.movie.id,
				director: props.movie.director,
				duration: props.movie.duration,
				year: props.movie.year,
				description: props.movie.description,
				trailer: props.movie.trailerLink || props.movie.trailer,
				thumbnail:
					props.movie.thumbnail ||
					`https://api.nomoreparties.co${props.movie.image.formats.thumbnail.url}`,

				nameRU: props.movie.nameRU,
				nameEN: props.movie.nameEN,

				image: `https://api.nomoreparties.co${props.movie.image.url}`,
				owner: props.movie.owner,
			})
		}
	}

	const handleClickDeleteMovie = () => {
		props.onMovieDelete(props.movie._id)
	}

	return (
		<div className='movies__card '>
			<div className='movies__shot'>
				<a
					href={props.movie.trailerLink}
					className='movies__link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={
							props.location.pathname === '/saved-movies'
								? props.movie.image
								: `https://api.nomoreparties.co${props.movie.image.url}`
						}
						alt={props.movie.nameRU}
						className='movies__shot_picture'
					/>
				</a>
			</div>
			<div className='movies__shot_info'>
				<div className='movies__shot_title'>{props.movie.nameRU}</div>

				{props.location.pathname === '/movies' ? (
					<button
						className={`movies__shot_choice ${movieSaveButtonClassName}`}
						type='button'
						onClick={handleClickSavedMovie}
					></button>
				) : (
					<button
						className='movies__shot_delete'
						type='button'
						onClick={handleClickDeleteMovie}
					></button>
				)}
			</div>
			<div className='movies__shot_time'>{getTimeFromMins(props.movie.duration)}</div>
		</div>
	)
}
export default MoviesCard
