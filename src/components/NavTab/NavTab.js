import './NavTab.css'
import React from 'react'

function NavTab(props) {
	return (
		<section className='navtab'>
			<div className='navtab__titlte__block'>
				<p className='navtab__titlte'>О проекте</p>
				<p className='navtab__titlte '>Технологии</p>
				<p className='navtab__titlte '>Студент</p>
			</div>
		</section>
	)
}

export default NavTab
