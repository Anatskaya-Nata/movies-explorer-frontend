import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
//import { CurrentUserContext } from '../../contexts/CurrentUserContext'
//import { CardContext } from '../../contexts/CardContext'

import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'
import EnterBlock from '../EnterBlock.css/EnterBlock'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'
import MenuResult from '../MenuResult/MenuResult'
import moviesApi from '../../utils/MoviesApi'

import { SHORT_MOVIE_DURATION } from '../../utils/Constants'

/*moviesApi.getMovies().then((result) => {
	console.log(result)
})*/

function App() {
	const [isSearching, setIsSearching] = React.useState(false)
	const [isEmptySearch, setIsEmptySearch] = React.useState(false)
	//const [movies, setMovies] = React.useState([])
	const [foundMovies, setFoundMovies] = React.useState([])
	const [isShortMovies, setIsShortMovies] = React.useState(false)

	const [initialMovies, setInitialMovies] = React.useState([])
	//	const [requestCards, setRequestCards] = React.useState(new Set())

	React.useEffect(() => {
		moviesApi
			.getInitialCards()
			.then((cardData) => {
				setInitialMovies(cardData)
			})
			.catch((err) => console.log(err))
	}, [])

	// Переключение чекбокса для поиска
	function handleToggleCheckbox() {
		setIsShortMovies(!isShortMovies)
	}

	// Функция поиска фильмов movies
	function movieSearch(searchBar) {
		if (isShortMovies) {
			const shortMovie = initialMovies.filter((movie) => {
				return (
					movie.duration <= SHORT_MOVIE_DURATION &&
					movie.nameRU.toLowerCase().includes(searchBar.toLowerCase())
				)
			})
			setFoundMovies(shortMovie)
		} else {
			const foundMovie = initialMovies.filter((movie) => {
				return movie.nameRU.toLowerCase().includes(searchBar.toLowerCase())
			})
			return setFoundMovies(foundMovie)
		}
	}

	// показ сообщениz о неудачном поиске
	function showEmptySearchMsg() {
		setIsEmptySearch(true)
	}
	// имитация загрузки
	function startPreloader() {
		setIsSearching(true)
		setTimeout(async () => {
			setIsSearching(false)
		}, 100)
	}
	return (
		//<CurrentUserContext.Provider value={currentUser}>
		//<CardContext.Provider value={cards}>
		<div className='App'>
			<div className='page'>
				<Switch>
					<Route exact path='/'>
						<Header name='promo'>
							<EnterBlock />
						</Header>
						<Main />
					</Route>
					<Route path='/movies'>
						<Header name='menu' />
						<Menu />
						<Movies
							startPreloader={startPreloader}
							isSearching={isSearching}
							isVisible={isEmptySearch}
							showEmptySearchMsg={showEmptySearchMsg}
							movieSearch={movieSearch}
							cards={foundMovies}
							handleToggleCheckbox={handleToggleCheckbox}
						/>
					</Route>
					<Route path='/saved-movies'>
						<Header name='menu' />
						<Menu />
						<SavedMovies />
					</Route>
					<Route path='/profile'>
						<Header name='menu' />
						<Menu />
						<Profile />
					</Route>
					<Route path='/signup'>
						<Register />
					</Route>
					<Route path='/signin'>
						<Login />
					</Route>
					<Route path='/temp'>
						<MenuResult />
					</Route>
					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
		//</CardContext.Provider>
		//</CurrentUserContext.Provider>
	)
}

export default App
