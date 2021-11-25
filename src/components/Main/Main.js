import './Main.css'

import React from 'react'

import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import AboutMe from '../AboutMe/AboutMe'
import Techs from '../Techs/Techs'
import Header from '../Header/Header'
import EnterBlock from '../EnterBlock/EnterBlock'
import MenuButton from '../MenuButton/MenuButton'

function Main(props) {
	return (
		<main className='page__promo'>
			<div className={`page ${props.loggedIn ? 'page__logged' : ''}`}>
				{props.loggedIn ? (
					<Header name='menu'>
						<MenuButton
							showMenu={props.showMenu}
							isShowMenu={props.isShowMenu}
							closeMenu={props.closeMenu}
						/>
					</Header>
				) : (
					<Header name='promo'>
						<EnterBlock />
					</Header>
				)}
			</div>

			<Promo />
			<NavTab />
			<AboutProject />
			<Techs />
			<AboutMe />
		</main>
	)
}

export default Main
