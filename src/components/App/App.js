import React from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'
import EnterBlock from '../EnterBlock/EnterBlock'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'
import MenuResult from '../MenuResult/MenuResult'
import mainApi from '../../utils/MainApi'
import * as auth from '../../utils/auth'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
	const { pathname } = useLocation()
	const [currentUser, setCurrentUser] = React.useState({})
	const [userMovies, setUserMovies] = React.useState([])
	const [loggedIn, setLoggedIn] = React.useState(false)
	const [infosignMessage, setInfosignMessage] = React.useState('')
	//const [initialMovies, setInitialMovies] = React.useState([])
	//const [shortMovieFilter, setShortMovieFilter] = React.useState(false)

	const history = useHistory()

	function handleError(error) {
		console.log(error)
	}
	/*	function handleLogIn() {
		setLoggedIn(true)
	}*/

	function getCurrentUser() {
		const jwt = localStorage.getItem('jwt')

		mainApi
			.getUserData(jwt)
			.then((userData) => {
				//console.log(userData)
				if (userData) {
					setCurrentUser(userData)
					localStorage.setItem('currentUser', JSON.stringify(userData))
					setLoggedIn(true)
					console.log(localStorage)
				}
			})
			.catch((err) => {
				console.log(err)
				//localStorage.removeItem('jwt')
				//localStorage.removeItem('currentUser')
			})
	}

	//Проверить токен
	React.useEffect(() => {
		const jwt = localStorage.getItem('jwt')

		if (jwt) {
			//console.log(jwt)
			auth.getUser(jwt).then((res) => {
				setLoggedIn(true)
				getCurrentUser()
				//console.log(res.data) //юзер
				//setName(res.data.name)
				//setEmail(res.data.email)

				history.push('/')
			})
		}
	}, [loggedIn, history])

	function handleLogin(email, password) {
		auth
			.authorize(email, escape(password))

			.then((data) => {
				console.log(data)
				if (data.token) {
					//getCurrentUser()
					setInfosignMessage('')
					//setName(name)
					//setEmail(email)
					//handleLogIn()
					history.push('/movies')
				}
			})
			.catch((err) => {
				setInfosignMessage('Что-то пошло не так! Попробуйте ещё раз.')
			})
			.finally(() => {
				setInfosignMessage('')
			})
	}

	function handleRegister(name, email, password) {
		setInfosignMessage('')
		auth
			.register(name, email, escape(password))
			.then(() => {
				handleLogin(email, password)
				setInfosignMessage('')
				history.push('/movies')
			})
			.catch((err) => {
				setInfosignMessage('Что-то пошло не так! Попробуйте ещё раз.')
			})
			.finally(() => {
				setInfosignMessage('')
			})
	}

	function handleUpdateUser({ name, email }) {
		mainApi
			.setUserData({ name, email })
			.then((newData) => {
				console.log(newData)
				setCurrentUser(newData)
				setInfosignMessage('Данные профиля успешно обновлены')
			})
			.catch((err) => {
				console.log(`Ошибка при обновлении данных пользователя. ${err}`)
			})
	}

	function handleMoviesSave(moviesData) {
		console.log(
			'лайкнутая карточка, отправденная на добавление в фильмы юзера',
			moviesData,
		)
		mainApi
			.setMovies(moviesData)
			.then(() => {
				getSavedMoviesCards()
			})
			.catch(handleError)
	}

	function getSavedMoviesCards() {
		const jwt = localStorage.getItem('jwt')
		mainApi
			.getSavedMovies(jwt)

			.then((newMovie) => {
				console.log('массив карточек юзера, пришедших из компаса', newMovie)
				setUserMovies(newMovie.data)
				//setUserMovies([...newMovie.data, ...userMovies])
				localStorage.setItem('userMovies', JSON.stringify(newMovie))

				console.log(localStorage)
				console.log('должен быть массив юзера', userMovies)
			})
			.catch(handleError)
	}

	function removeSavedMovie(id) {
		mainApi
			.deleteCard(id)
			.then((res) => {
				getSavedMoviesCards()
			})
			.catch(handleError)
	}

	function handleLogout() {
		setCurrentUser({})
		setLoggedIn(false)
		localStorage.removeItem('jwt')
		//localStorage.clear()
		history.push('/')
		setUserMovies([])

		console.log(localStorage)
	}

	/*React.useEffect(() => {
		const jwt = localStorage.getItem('jwt')
		if (jwt !== null) {
			Promise.all([mainApi.getUserData(jwt), mainApi.getUserMovies(jwt)])
				.then(([userData, savedMovies]) => {
					localStorage.setItem('currentUser', JSON.stringify(userData))
					setCurrentUser(userData)

					const savedMoviesList = savedMovies.filter(
						(item) => item.owner._id === userData._id,
					)
					localStorage.setItem('userMovies', JSON.stringify(savedMoviesList))
					setUserMovies(savedMoviesList)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [loggedIn])*/

	/*function handleDislikeClick(movie) {
		const jwt = localStorage.getItem('jwt')
		const movieId = movie.id || movie.movieId
		const selectedMovie = userMovies.find((item) => item.movieId === movieId)
		console.log('Карточка отмеченная на удаление', selectedMovie)
		mainApi
			.deleteMovie(selectedMovie._id, jwt)

			.then((deletedMovie) => {
				console.log('Карточка ответ на фетч на удаление', deletedMovie)
				if (!deletedMovie) {
					throw new Error('При удалении фильма произошла ошибка')
				} else {
					const newMoviesList = userMovies.filter((c) => c.movieId !== movieId)
					setUserMovies(newMoviesList)
				}
			})
			.catch((err) => console.log(`При удалении фильма: ${err}`))
	}

	function handleMovieDeleteButton(movie) {
		handleDislikeClick(movie)
	}
*/
	return (
		<CurrentUserContext.Provider value={currentUser}>
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
								location={pathname}
								onMovieSave={handleMoviesSave}
								onMovieDelete={removeSavedMovie}
								savedUserMovies={userMovies}
								//initialMovies={initialMovies}
								//handleDuration={handleDuration}
								//shortMovieFilter={!shortMovieFilter}
								//handleCheckboxChange={handleCheckboxChange}
							/>
						</Route>
						<Route path='/saved-movies'>
							<Header name='menu' />
							<Menu />
							<SavedMovies
								location={pathname}
								savedUserMovies={userMovies}
								loggedIn={loggedIn}
								onMovieDelete={removeSavedMovie}

								//initialMovies={initialMovies}
								//handleDuration={handleDuration}
								//shortMovieFilter={shortMovieFilter}
								//handleCheckboxChange={handleCheckboxChange}
							/>
						</Route>
						<Route path='/profile'>
							<Header name='menu' />
							<Menu />
							<Profile
								onEditUser={handleUpdateUser}
								logOut={handleLogout}
								errorText={infosignMessage}
							/>
						</Route>
						<Route path='/signup'>
							<Register onRegister={handleRegister} errorText={infosignMessage} />
						</Route>
						<Route path='/signin'>
							<Login onLogin={handleLogin} errorText={infosignMessage} />
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
		</CurrentUserContext.Provider>
	)
}

export default App
