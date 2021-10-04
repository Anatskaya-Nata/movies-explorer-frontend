import './Header.css'
import React from 'react'
import headerLogo from '../../images/headerLogo.svg'
import { Link } from 'react-router-dom'

function Header(props) {
	return (
		<header className={`header header__${props.name}`}>
			<Link to='/'>
				<img src={headerLogo} alt='Логотип' className='header__logo' />
			</Link>

			<div className={`header__buttonblock_${props.name}`}>{props.children}</div>
		</header>
	)
}

export default Header
