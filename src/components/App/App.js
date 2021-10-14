import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
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
import * as auth from '../../utils/auth'

//import mainApi from '../../utils/MainApi'
//import moviesApi from '../../utils/MoviesApi'

//import { SHORT_MOVIE_DURATION } from '../../utils/Constants'

/*moviesApi.getMovies().then((result) => {
	console.log(result)
})*/

function App() {
	const [currentUser, setCurrentUser] = React.useState({})
	const [loggedIn, setLoggedIn] = React.useState(false)
	const [email, setEmail] = React.useState('')
	const [name, setName] = React.useState('')
	const history = useHistory()
	const [infosignMessage, setInfosignMessage] = React.useState({
		text: '',
	})

	/*const [isShowMenu, setIsShowMenu] = React.useState('.header__menu_type-closed')

	if (isShowMenu === 'header__menu_type-closed') {
		setIsShowMenu('header__menu_type-opend')
	} else {
		setIsShowMenu('header__menu_type-closed')
	}*/

	/*React.useEffect(() => {
		mainApi
			.getUserData()
			.then((userData) => {
				setCurrentUser(userData.data)
			})
			.catch((err) => console.log(err))
	}, [loggedIn])*/

	function handleLogIn() {
		setLoggedIn(true)
	}
	//Проверить токен
	React.useEffect(() => {
		const jwt = localStorage.getItem('jwt')
		console.log('попала или нет')

		if (jwt) {
			console.log(jwt)
			auth.getContent(jwt).then((res) => {
				setLoggedIn(true)
				console.log(res.data.email)
				setEmail(res.data.email)
				setEmail(res.data.name)
				history.push('/')
			})
		}
	}, [history])

	function handleSubmitLogin(password, email) {
		auth
			.authorize(escape(password), email)

			.then((data) => {
				console.log(data)
				if (data.token) {
					setEmail(email)
					setName(name)
					handleLogIn()
					history.push('/')
				}
			})

			.catch((err) => {
				setInfosignMessage({
					text: 'Что-то пошло не так! Попробуйте ещё раз.',
				})
				//setInfoTooltipOpen(true)
			})
	}

	function handleSubmitRegister(name, password, email) {
		auth
			.register(escape(password), name, email)
			.then(() => {
				setInfosignMessage(
					{ text: 'Вы успешно зарегистрировались!' },

					history.push('/login'),
				)
			})
			.catch((err) => {
				console.log(err.message)
				setInfosignMessage({
					text: 'Что-то пошло не так! Попробуйте ещё раз.',
				})
			})
		/*.finally(() => {
				setInfoTooltipOpen(true)
			})*/
	}

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
							<Menu /*isShowMenu={isShowMenu} */ />
							<Movies />
						</Route>
						<Route path='/saved-movies'>
							<Header name='menu' />
							<Menu />
							<SavedMovies />
						</Route>
						<Route path='/profile'>
							<Header name='menu' />
							<Menu />
							<Profile email={email} name={name} />
						</Route>
						<Route path='/signup'>
							<Register onRegister={handleSubmitRegister} errorTex={infosignMessage} />
						</Route>
						<Route path='/signin'>
							<Login onLogin={handleSubmitLogin} />
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
