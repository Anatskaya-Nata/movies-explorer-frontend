import './Header.css'
import React from 'react'
import headerLogo from '../../images/headerLogo.svg'
//import headerGreenButton from '../../images/headerGreenButton.svg'

function Header(props) {
	return (
		<header className='header header__promo'>
			<img src={headerLogo} alt='Логотип' className='header__logo' />
			<div className='header__buttonblock'>
				<span className='header__regbutton'>Регистрация</span>
				<button className='header__logbutton'>Вoйти</button>
			</div>
		</header>
	)
}

export default Header
