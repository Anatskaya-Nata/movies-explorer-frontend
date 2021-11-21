import './Menu.css'
import React from 'react'
import closeButton from '../../images/Close.svg'
import itemAcc from '../../images/icon__acc.svg'
import { NavLink, Link } from 'react-router-dom'

function Menu(props) {
	return (
		<nav
			className={`header__menu_type-opend-width header__menu_type-closed  ${
				props.isShowMenu ? 'header__menu_type-opend' : ''
			}`}
		>
			<button
				className='header__menu_close-button'
				type='button'
				onClick={props.closeMenu}
			>
				<img src={closeButton} alt='Крестик' className='header__menu_close-item' />
			</button>
			<nav className='header__menu_text-block'>
				<NavLink
					exact
					to='/'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
					onClick={props.closeMenu}
				>
					Главная
				</NavLink>

				<NavLink
					to='/movies'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
					onClick={props.closeMenu}
				>
					Фильмы
				</NavLink>

				<NavLink
					to='/saved-movies'
					activeClassName='header__menu_link_active'
					className='header__menu_link'
					onClick={props.closeMenu}
				>
					Сохранённые фильмы
				</NavLink>
			</nav>

			<Link to='/profile' onClick={props.closeMenu}>
				<div className='header__menu_aсс'>
					<img src={itemAcc} alt='Значок' className='header__menu_acc_item' />
					<div className='header__menu_acc_text'> Аккаунт</div>
				</div>
			</Link>
		</nav>
	)
}

export default Menu
