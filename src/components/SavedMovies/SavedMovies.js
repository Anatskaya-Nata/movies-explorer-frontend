import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
//import mainApi from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies'
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { filterMovies } from '../../utils/Constants'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'

function SavedMovies(props) {
	//const currentUser = React.useContext(CurrentUserContext)
	const [initialSavedMovies, setInitialSavedMovies] = React.useState([])
	const [isPreloaderShow, setPreloaderShow] = React.useState(false)
	const [isErrorMessage, setIsErrorMessage] = React.useState(false)
	const [shortMovieFilter, setShortMovieFilter] = React.useState(false)
	//const [shortUserMovieFilter, setUserShortMovieFilter] = React.useState(false)

	const handleCheckboxChange = () => {
		setShortMovieFilter(!shortMovieFilter)
		handleDuration()
	}

	/*const handleCheckboxChange = () => {
		setShortMovieFilter((shortMovieFilter) => !shortMovieFilter)
	}*/

	/*function handleCheckChange() {
		props.handleCheckboxChange()
	}*/

	console.log('YEE!', props.savedUserMovies)

	function getInitialSavedMovies(query) {
		setInitialSavedMovies(props.savedUserMovies)
		setIsErrorMessage(false)
		const savedMoviesCards = props.savedUserMovies.filter((movie) =>
			filterMovies(movie, query),
		)
		setInitialSavedMovies(savedMoviesCards)
	}

	function handleDuration() {
		if (!shortMovieFilter) {
			const moviesFilter = props.savedUserMovies.filter(
				(movieCard) => movieCard.duration <= 55,
			)
			setInitialSavedMovies(moviesFilter)
		} else {
			//setShortMovieFilter(shortMovieFilter)
			setInitialSavedMovies(props.savedUserMovies)
			setPreloaderShow(false)
		}
	}

	/*function getInitialSavedMovies(query) {
		setInitialSavedMovies([])
		setIsErrorMessage(false)
		if (props.loggedIn) {
			console.log('проверить логгедИн на тру', props.loggedIn)
			mainApi
				.getSavedMovies()
				.then((movies) => {
					console.log(' Массив карточек появляющихся в SavesMovies', movies)

					const savedMoviesCards = movies.data.filter((movie) =>
						filterMovies(movie, query),
					)

					const checkedMoviesCards = savedMoviesCards.filter(
						(savedMovieCard) => savedMovieCard.duration <= 55,
					)

					setInitialSavedMovies(checkedMoviesCards)

					console.log('работает ли фильтр', shortMovieFilter)
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
	}*/

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
				getInitialMovies={getInitialSavedMovies}
				shortMovieFilter={props.shortMovieFilter}
				onCheckboxChange={handleCheckboxChange}
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
/*initialMovies={
	initialSavedMovies.length > 0 ? initialSavedMovies : props.savedUserMovies
}*/
