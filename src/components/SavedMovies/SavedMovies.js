import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import mainApi from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies'
import { filterMovies } from '../../utils/Constants'

function SavedMovies(props) {
	const [initialSavedMovies, setInitialSavedMovies] = React.useState([])
	const [isPreloaderShow, setPreloaderShow] = React.useState(false)
	const [isErrorMessage, setIsErrorMessage] = React.useState(false)
	const [shortMovieFilter, setShortMovieFilter] = React.useState(false)

	/*	const handleCheckboxChange = () => {
		setShortMovieFilter(!shortMovieFilter)
	}*/

	function handleCheckChange() {
		props.handleCheckboxChange()
	}

	function getInitialSavedMovies(query) {
		setInitialSavedMovies([])
		setIsErrorMessage(false)
		if (props.loggedIn) {
			mainApi
				.getSavedMovies()
				.then((movies) => {
					console.log(' Массив карточек появляющихся в SavesMovies', movies)

					const savedMoviesCards = movies.filter((movie) => filterMovies(movie, query))

					setInitialSavedMovies(
						!shortMovieFilter
							? savedMoviesCards
							: savedMoviesCards.filter(
									(savedMovieCard) => savedMovieCard.duration <= 55,
							  ),
					)
					setShortMovieFilter(false)
				})
				.catch((err) => {
					console.log(err)
					setIsErrorMessage(true)
				})
				.finally(() => {
					setPreloaderShow(false)
				})
		}
	}
	return (
		<div className='movies'>
			<SearchForm
				getInitialMovies={getInitialSavedMovies}
				shortMovieFilter={props.shortMovieFilter}
				onCheckboxChange={handleCheckChange}
			/>
			{isPreloaderShow && <Preloader />}
			{props.savedUserMovies.length > 0 ? (
				<MoviesCardList
					location={props.location}
					initialMovies={
						initialSavedMovies.length > 0 ? initialSavedMovies : props.savedUserMovies
					}
					savedUserMovies={props.savedUserMovies}
					onMovieDelete={props.onMovieDelete}
				/>
			) : (
				<NotFoundMovies isErrorMessage={isErrorMessage} />
			)}
		</div>
	)
}

export default SavedMovies
