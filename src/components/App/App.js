import React,{useState} from 'react'
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
import mainApi from '../../utils/MainApi'


//import { SHORT_MOVIE_DURATION } from '../../utils/Constants'

/*moviesApi.getMovies().then((result) => {
	console.log(result)
})*/

function App() {
	const [currentUser, setCurrentUser] = React.useState({})
	const [loggedIn, setLoggedIn] = React.useState(false)
	//const [name, setName] = React.useState('')
	//const [email, setEmail] = React.useState('')

	const [infosignMessage, setInfosignMessage] = useState('')
	const history = useHistory()


	function getCurrentUser() {
		const jwt = localStorage.getItem('jwt')
		mainApi
			.getUserData(jwt)
			.then((userData) => {
				//console.log(userData)
				if (userData) {
					setCurrentUser(userData)
					localStorage.setItem('currentUser', JSON.stringify(userData))
					console.log(localStorage)
				}
			})
			.catch((err) => {
				console.log(err)
				//localStorage.removeItem('jwt')
				//localStorage.removeItem('currentUser')
			})
	}

	function handleUpdateUser({ name, email }) {
		mainApi
			.setUserData({ name, email })
			.then((newData) => {
				console.log('newData')
				setCurrentUser(newData)
				setInfosignMessage('Данные профиля успешно обновлены')
				
			})
			.catch((err) => {
				console.log(`Ошибка при обновлении данных пользователя. ${err}`)
			})
			/*.finally(() => {
				setIsPopupLoading(false)
			})*/
	}

	function handleLogOut() {
		setLoggedIn(false)
		localStorage.removeItem('jwt')
		//setEmail('')
	
		history.push('/')
		console.log(localStorage)
	}

	function handleLogIn() {
		setLoggedIn(true)
	}
	//Проверить токен
	React.useEffect(() => {
		const jwt = localStorage.getItem('jwt')

		if (jwt) {
			//console.log(jwt)
			auth.getContent(jwt).then((res) => {
				setLoggedIn(true)
				getCurrentUser()
				//console.log(res.data) //юзер
				//setName(res.data.name)
				//setEmail(res.data.email)
				history.push('/')
			})
		}
	}, [loggedIn, history])

	function handleSubmitLogin(email, password) {
		auth
			.authorize(email, escape(password))

			.then((data) => {
				console.log(data)
				if (data.token) {
					getCurrentUser()
					//setName(name)
					//setEmail(email)
					handleLogIn()
					history.push('/movies')
				}
			})
			.catch((err) => {
				setInfosignMessage('Что-то пошло не так! Попробуйте ещё раз.')
			})
	}

	function handleSubmitRegister(name, email, password) {
		auth
			.register(name, email, escape(password))
			.then(() => {
				handleSubmitLogin(email, password)
				setInfosignMessage(' ')
				history.push('/movies')
			})
			.catch((err) => {
				setInfosignMessage('Что-то пошло не так! Попробуйте ещё раз.')
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
							<Profile onEditUser={handleUpdateUser} logOut={handleLogOut}/>
						</Route>
						<Route path='/signup'>
							<Register onRegister={handleSubmitRegister} errorText={infosignMessage} />
						</Route>
						<Route path='/signin'>
							<Login onLogin={handleSubmitLogin} errorText={infosignMessage}/>
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
