import './Main.css'

import React from 'react'

import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import AboutMe from '../AboutMe/AboutMe'
import Techs from '../Techs/Techs'
import Header from '../Header/Header'
import EnterBlock from '../EnterBlock/EnterBlock'

function Main(props) {
	return (
		<main className='page'>
			<Header name='promo'>
				<EnterBlock />
			</Header>
			<Promo />
			<NavTab />
			<AboutProject />
			<Techs />
			<AboutMe />
		</main>
	)
}

export default Main
