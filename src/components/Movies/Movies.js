import './Movies.css'
import React from 'react'
import moviesApi from '../../utils/MoviesApi'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { filterMovies } from '../../utils/Constants'
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies'
import Preloader from '../Preloader/Preloader'

function Movies(props) {
	const [initialMovies, setInitialMovies] = React.useState([])
	const [isPreloaderShow, setPreloaderShow] = React.useState(false)
	const [isErrorMessage, setIsErrorMessage] = React.useState(false)
	const [shortMovieFilter, setShortMovieFilter] = React.useState(false)

	React.useEffect(() => {
		const lastSavedMovies = localStorage.getItem('movies')

		//console.log(localStorage.movies)
		if (lastSavedMovies) {
			setInitialMovies(JSON.parse(lastSavedMovies))
		} else {
			setInitialMovies([])
		}
		setShortMovieFilter(false)
	}, [])

	function handleDuration() {
		const lastSavedMovies = JSON.parse(localStorage.getItem('movies'))

		if (!shortMovieFilter) {
			const moviesFilter = lastSavedMovies.filter((movieCard) => movieCard.duration <= 55)
			setInitialMovies(moviesFilter)
		} else {
			//setShortMovieFilter(shortMovieFilter)
			setInitialMovies(lastSavedMovies)
		}
	}

	const handleCheckboxChange = () => {
		setShortMovieFilter((Filter) => !Filter)
		handleDuration()
	}

	function getInitialMovies(query) {
		setInitialMovies([])
		setPreloaderShow(true)
		setIsErrorMessage(false)
		moviesApi
			.getInitialCards()

			.then((movies) => {
				const moviesCards = movies.filter((movie) => filterMovies(movie, query))
				//console.log(query)
				//console.log(movies)
				console.log('массив карточек по запросу в поисковой стороке movies', moviesCards)
				setInitialMovies(moviesCards)
				localStorage.setItem('movies', JSON.stringify(moviesCards))
				//localStorage.setItem('movies', JSON.stringify(movies))

				//setShortMovieFilter(false)
			})
			.catch((err) => {
				console.log(err)
				//setIsErrorMessage(true)
			})
			.finally(() => {
				setPreloaderShow(false)
			})
	}
	//console.log(initialMovies)
	return (
		<div className='movies'>
			<SearchForm
				getInitialMovies={getInitialMovies}
				/*getInitialMovies={handleSearchMovie}*/
				shortMovieFilter={props.shortMovieFilter}
				onCheckboxChange={handleCheckboxChange}
			/>

			{isPreloaderShow && <Preloader />}
			{initialMovies.length > 0 ? (
				<MoviesCardList
					location={props.location}
					// карточки по запросу
					initialMovies={initialMovies}
					//initialMovies={props.initialMovies}
					savedUserMovies={props.savedUserMovies}
					onMovieDelete={props.onMovieDelete}
					onMovieSave={props.onMovieSave}
				/>
			) : (
				<NotFoundMovies isErrorMessage={isErrorMessage} />
			)}
		</div>
	)
}

export default Movies

/*  <button className='movies__button-more' type='button'>
				Ещё
			</button> */

//<Preloader isShow={isPreloaderShow} />
/*{isPreloaderShow && <Preloader />}*/
