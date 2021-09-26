import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'

function App() {
	return (
		<div className='App'>
			<div className='page'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Promo />
						<NavTab />
						<AboutProject />
						<Techs />
						<AboutMe />
					</Route>
					<Route path='/movies'>
						<Movies />
					</Route>
					<Route path='/saved-movies'>
						<SavedMovies />
					</Route>
					<Route path='/profile'>
						<Profile />
					</Route>
					<Route path='/signup'>
						<Register />
					</Route>
					<Route path='/signin'>
						<Login />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
	)
}

export default App
