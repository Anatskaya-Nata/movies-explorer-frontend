import './MoviesCardList.css'
import React from 'react'
import {
	NUMBER_OF_CARDS_MAX_WIDTH,
	NUMBER_OF_CARDS_MIDDLE_WIDTH,
	NUMBER_OF_CARDS_MIN_WIDTH,
} from '../../utils/Constants'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = (props) => {
	const [countMovies, setCountMovies] = React.useState(0)

	React.useEffect(() => {
		props.location.pathname === '/movies'
			? actualResizeHandler()
			: setCountMovies(props.initialMovies.length)
	}, [props.initialMovies, props.location])

	function actualResizeHandler() {
		if (window.innerWidth > 1275) {
			setCountMovies(NUMBER_OF_CARDS_MAX_WIDTH)
		} else if (window.innerWidth > 760) {
			setCountMovies(NUMBER_OF_CARDS_MIDDLE_WIDTH)
		} else {
			setCountMovies(NUMBER_OF_CARDS_MIN_WIDTH)
		}
	}
	function addMoreMovies() {
		if (window.innerWidth > 1275) {
			setCountMovies(countMovies + 4)
		} else {
			setCountMovies(countMovies + 2)
		}
	}

	const disableMoviesButton = React.useMemo(() => {
		return countMovies >= props.initialMovies.length ? 'movies__button-more_hidden' : ''
	}, [countMovies, props.initialMovies])

	return (
		<section className='movies__gallary_container'>
			<ul className='movies__gallary'>
				{props.initialMovies.slice(0, countMovies).map((movie) => {
					//console.log(movie)

					return (
						<li className='movies__gallary_item' key={movie.id || movie._id}>
							<MoviesCard
								location={props.location}
								onMovieSave={props.onMovieSave}
								onMovieDelete={props.onMovieDelete}
								savedUserMovies={props.savedUserMovies}
								movie={movie}
								/*	image={
									props.location === '/saved-movies'
										? props.movie.image
										: `https://api.nomoreparties.co${movie.image.url}`
								}*/
								key={movie._id}
							/>
						</li>
					)
				})}
			</ul>
			<button
				onClick={addMoreMovies}
				className={
					props.location.pathname === '/movies'
						? `movies__button-more ${disableMoviesButton}`
						: 'movies__button-more movies__button-more_hidden'
				}
			>
				Ещё
			</button>
		</section>
	)
}

export default MoviesCardList
