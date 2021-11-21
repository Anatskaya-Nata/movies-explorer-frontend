import React from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import './App.css'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'
import ProtectedRoute from '../ProtectedRoute'
import mainApi from '../../utils/MainApi'
import * as auth from '../../utils/auth'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
	const [currentUser, setCurrentUser] = React.useState({})
	const [serverError, setServerError] = React.useState(null)
	const [userMovies, setUserMovies] = React.useState([])
	const [loggedIn, setLoggedIn] = React.useState(false)
	const [infosignMessage, setInfosignMessage] = React.useState('')
	const [isShowMenu, setIsShowMenu] = React.useState(false)
	const history = useHistory()
	const location = useLocation()

	React.useEffect(() => {
		if (loggedIn) {
			Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
				.then(([userData, moviesData]) => {
					setCurrentUser(userData)
					localStorage.setItem('currentUser', JSON.stringify(userData))

					const savedMoviesList = moviesData.data.filter(
						(item) => item.owner === userData.data._id,
					)

					localStorage.setItem('userMovies', JSON.stringify(savedMoviesList))
					setUserMovies(savedMoviesList)
				})
				.catch((err) => {
					alert(err)
					console.log(err)
				})
		}
	}, [loggedIn])

	const handleShowMenuClick = () => {
		setIsShowMenu((isShowMenu) => !isShowMenu)
	}

	const closeMenu = () => {
		setIsShowMenu(false)
	}

	function handleError(error) {
		console.log(error)
	}

	//Проверить токен
	React.useEffect(() => {
		const jwt = localStorage.getItem('jwt')
		if (jwt) {
			auth
				.getUser(jwt)
				.then((res) => {
					setLoggedIn(true)
					setCurrentUser(res)
				})
				.catch((err) => {
					console.log(`Переданный токен некорректен ${err}`)
					localStorage.removeItem('jwt')
					history.push('/')
				})
		}
	}, [loggedIn, history])

	function handleLogin(email, password) {
		auth
			.authorize(email, escape(password))

			.then((data) => {
				if (data.token) {
					setInfosignMessage('')
					setLoggedIn(true)
					setServerError(null)
					history.push('/movies')
				}
			})
			.catch((err) => {
				if (err === 'Ошибка: 401') {
					setServerError(401)
				} else if (err === 'Ошибка: 400') {
					setServerError(400)
				}
				console.log(err)
			})
	}

	function handleRegister(name, email, password) {
		setInfosignMessage('')
		auth
			.register(name, email, escape(password))
			.then(() => {
				handleLogin(email, password)
				setInfosignMessage('')
				setServerError(null)
				history.push('/movies')
			})
			.catch((err) => {
				if (err === 'Ошибка: 409') {
					setServerError(409)
				}
				if (err === 'Ошибка: 400') {
					setServerError(400)
				}
				console.log(err)
			})
	}

	function handleUpdateUser({ name, email }) {
		mainApi
			.setUserData({ name, email })
			.then((newData) => {
				setCurrentUser(newData)
				setInfosignMessage('Данные профиля успешно обновлены')
			})
			.catch((err) => {
				if (err === 'Ошибка: 409') {
					setServerError(409)
				}
				console.log(err)
			})
	}

	function handleMoviesSave(movie) {
		const jwt = localStorage.getItem('jwt')
		mainApi
			.setMovies(movie, jwt)
			.then(() => {
				getSavedMoviesCards()
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`)
			})
	}

	function getSavedMoviesCards() {
		const jwt = localStorage.getItem('jwt')

		mainApi
			.getSavedMovies(jwt)

			.then((newMovie) => {
				const savedMoviesList = newMovie.data.filter(
					(item) => item.owner === currentUser.data._id,
				)

				localStorage.setItem('userMovies', JSON.stringify(savedMoviesList))
				setUserMovies(savedMoviesList)
			})
			.catch(handleError)
	}

	function removeSavedMovie(id) {
		mainApi
			.deleteCard(id)
			.then(() => {
				getSavedMoviesCards()

				setUserMovies(userMovies)
			})
			.catch(handleError)
	}

	function handleLogout() {
		setCurrentUser({})
		setLoggedIn(false)
		localStorage.removeItem('jwt')
		localStorage.removeItem('movies')
		//localStorage.clear()
		history.push('/')
		setUserMovies([])
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='App'>
				<div className='page'>
					<Switch>
						<Route exact path='/'>
							<Main />
						</Route>
						<Route path='/signup'>
							<Register
								onRegister={handleRegister}
								errorText={infosignMessage}
								serverError={serverError}
							/>
						</Route>
						<Route path='/signin'>
							<Login
								onLogin={handleLogin}
								errorText={infosignMessage}
								serverError={serverError}
							/>
						</Route>

						<ProtectedRoute
							path='/movies'
							component={Movies}
							location={location.pathname}
							loggedIn={loggedIn}
							onMovieSave={handleMoviesSave}
							onMovieDelete={removeSavedMovie}
							savedUserMovies={userMovies}
							showMenu={handleShowMenuClick}
							isShowMenu={isShowMenu}
							closeMenu={closeMenu}
						/>
						<ProtectedRoute
							path='/saved-movies'
							component={SavedMovies}
							location={location.pathname}
							savedUserMovies={userMovies}
							loggedIn={loggedIn}
							onMovieDelete={removeSavedMovie}
							showMenu={handleShowMenuClick}
							isShowMenu={isShowMenu}
							closeMenu={closeMenu}
						/>
						<ProtectedRoute
							path='/profile'
							component={Profile}
							loggedIn={loggedIn}
							onEditUser={handleUpdateUser}
							logOut={handleLogout}
							errorText={infosignMessage}
							showMenu={handleShowMenuClick}
							isShowMenu={isShowMenu}
							closeMenu={closeMenu}
							serverError={serverError}
						/>

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
