import './MoviesCardList.css'
import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = (props) => {
	const [countMovies, setCountMovies] = React.useState(0)

	React.useEffect(() => {
		props.location === '/movies'
			? actualResizeHandler()
			: setCountMovies(props.initialMovies.length)
	}, [props.initialMovies, props.location])

	//console.log(props.initialMovies)
	function actualResizeHandler() {
		if (window.innerWidth > 1270) {
			setCountMovies(12)
		} else if (window.innerWidth > 750) {
			setCountMovies(8)
		} else {
			setCountMovies(5)
		}
	}
	function addMoreMovies() {
		if (window.innerWidth > 1250) {
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
					props.location === '/movies'
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
/*  <button className='movies__button-more' type='button'>
				Ещё
			</button> */
