import './Movies.css'
import React from 'react'
import moviesApi from '../../utils/MoviesApi'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { FILTERDMOVIES, MAX_SHORT_MOVIE_DURATION } from '../../utils/Constants'
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies'
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'

function Movies(props) {
	const [initialMovies, setInitialMovies] = React.useState([])
	const [isPreloaderShow, setPreloaderShow] = React.useState(false)
	const [isErrorMessage, setIsErrorMessage] = React.useState(false)
	const [shortMovieFilter, setShortMovieFilter] = React.useState(false)

	React.useEffect(() => {
		const lastSavedMovies = localStorage.getItem('movies')

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
			const moviesFilter = lastSavedMovies.filter(
				(movieCard) => movieCard.duration <= MAX_SHORT_MOVIE_DURATION,
			)
			setInitialMovies(moviesFilter)
		} else {
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
				const moviesCards = movies.filter((movie) => FILTERDMOVIES(movie, query))

				setInitialMovies(moviesCards)
				localStorage.setItem('movies', JSON.stringify(moviesCards))
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setPreloaderShow(false)
			})
	}

	return (
		<div className='movies'>
			<Header name='menu'>
				<MenuButton
					showMenu={props.showMenu}
					isShowMenu={props.isShowMenu}
					closeMenu={props.closeMenu}
				/>
			</Header>

			<SearchForm
				getInitialMovies={getInitialMovies}
				shortMovieFilter={props.shortMovieFilter}
				onCheckboxChange={handleCheckboxChange}
			/>
			{isPreloaderShow && <Preloader />}
			{initialMovies.length > 0 ? (
				<MoviesCardList
					location={props.location}
					initialMovies={initialMovies}
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
