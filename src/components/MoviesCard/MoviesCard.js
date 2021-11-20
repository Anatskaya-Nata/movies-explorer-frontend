import './MoviesCard.css'
import React from 'react'

function MoviesCard(props) {
	/*	const isOwn = props.card.owner === currentUser._id
	console.log(props.card.owner, currentUser._id)*/

	//const movieData = props.movie
	/*console.log(
		'массив, сохраненных карточек,пришедший в saveMovies',
		props.savedUserMovies,
	)*/
	/*const isSavedMovie = JSON.parse(localStorage.getItem('userMovies'))*/

	//console.log('карточка, на которую тыкаем', props.movie.nameRU) ВИДИТ
	const isSavedMovie = props.savedUserMovies.some((i) => i.nameRU === props.movie.nameRU)
	//console.log('карточки юзера, пришедшие из Lockal', isSavedMovie)
	console.log('карточки юзера, пришедшие c запроса', props.savedUserMovies)
	/*const findQueryMovies = JSON.parse(localStorage.getItem('movies'))
	console.log(localStorage)
	const isSavedMovie = findQueryMovies.some((i) => i.nameRU === props.movie.nameRU)*/

	function getTimeFromMins(mins) {
		const hours = Math.trunc(mins / 60)
		const minutes = mins % 60
		return hours + 'ч ' + minutes + 'м'
	}

	const movieSaveButtonClassName = `${isSavedMovie && 'movies__shot_choice-active'}`
	//console.log('что за страница сеучас', props.location)
	function handleClickSavedMovie() {
		if (isSavedMovie) {
			console.log('карточка с сердечком?', isSavedMovie)
			props.savedUserMovies.forEach((savedMovie) => {
				console.log('карточка , которую смотрят на предмет сердечка', savedMovie)

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
				//isSaved: props.movie.isSaved,
			})
		}
	}

	const handleClickDeleteMovie = () => {
		props.onMovieDelete(props.movie._id)
	}
	//console.log(' props. movie в saveMovies', props.movie)
	//console.log(' props. movie.image в Movies', props.movie.image)
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
						//src={`https://api.nomoreparties.co${props.movie.image.url}`}
						//src={props.movie.image}
						src={
							props.location === '/saved-movies'
								? props.movie.image
								: `https://api.nomoreparties.co${props.movie.image.url}`
						}
						alt={props.movie.nameRU}
						//alt='кадр из фильма'
						className='movies__shot_picture'
					/>
				</a>
			</div>
			<div className='movies__shot_info'>
				<div className='movies__shot_title'>{props.movie.nameRU}</div>

				{props.location === '/movies' ? (
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

/*{props.location === '/movies' ? (
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






				<button
					className={`movies__shot_choice ${movieSaveButtonClassName}`}
					type='button'
					onClick={handleClickSavedMovie}
				></button>



)}*/
