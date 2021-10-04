import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
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

function App() {
	return (
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
						<Movies />
					</Route>
					<Route path='/saved-movies'>
						<Header name='menu' />
						<SavedMovies />
					</Route>
					<Route path='/profile'>
						<Header name='menu' />
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
	)
}

export default App
