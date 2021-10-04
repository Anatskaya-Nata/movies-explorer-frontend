import './Menu.css'
import React from 'react'
import closeButton from '../../images/Close.svg'
import itemAcc from '../../images/icon__acc.svg'
import { NavLink, Link } from 'react-router-dom'

function Menu(props) {
	return (
		<nav className='header__menu_type-opend'>
			<button className='header__menu_close-button' type='button'>
				<img src={closeButton} alt='Крестик' className='header__menu_close-item' />
			</button>
			<nav className='header__menu_text-block'>
				<NavLink
					exact
					to='/'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
				>
					Главная
				</NavLink>

				<NavLink
					to='/movies'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
				>
					Фильмы
				</NavLink>

				<NavLink
					to='/saved-movies'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
				>
					Сохранённые фильмы
				</NavLink>
			</nav>

			<div className='header__menu_aсс'>
				<Link to='/profile'>
					{' '}
					<img src={itemAcc} alt='Значок' className='header__menu_acc_item' />
				</Link>
				<div className='header__menu_acc_text'> Аккаунт</div>
			</div>
		</nav>
	)
}

export default Menu
