import './Main.css'

import React from 'react'

import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import AboutMe from '../AboutMe/AboutMe'
import Techs from '../Techs/Techs'

function Main(props) {
	return (
		<main className='page'>
			<Promo />
			<NavTab />
			<AboutProject />
			<AboutMe />
			<Techs />
		</main>
	)
}

export default Main
