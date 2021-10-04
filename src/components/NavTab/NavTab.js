import './NavTab.css'
import { React } from 'react'

function NavTab(props) {
	return (
		<section className='navtab'>
			<ul className='navtab__titlte__block'>
				<li className='navtab__titlte'>О проекте</li>
				<li className='navtab__titlte'>Технологии</li>
				<li className='navtab__titlte'>Студент</li>
			</ul>
		</section>
	)
}

export default NavTab
