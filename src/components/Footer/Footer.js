import './Footer.css'
import React from 'react'

function Footer(props) {
	return (
		<footer className='footer'>
			<div className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
			<div className='footer__footer'>
				<ul className='footer__partners'>
					<li className='footer__text footer__text_partner'>Яндекс.Практикум</li>
					<li className='footer__text footer__text_partner'>Github</li>
					<li className='footer__text footer__text_partner'>Facebook</li>
				</ul>
				<div className=' footer__text footer__text_year'>©2020</div>
			</div>
		</footer>
	)
}

export default Footer
