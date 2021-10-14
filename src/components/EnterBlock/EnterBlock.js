import './EnterBlock.css'
import React from 'react'
import { Link } from 'react-router-dom'

//import menuClosed from '../../images/icon__COLOR_icon-main.svg'

function EnterBlock(props) {
	return (
		<React.Fragment>
			<Link to='/signup'>
				<span className='header__regbutton'>Регистрация</span>
			</Link>
			<Link to='/signin'>
				<button className='header__logbutton'>Вoйти</button>
			</Link>
		</React.Fragment>
	)
}

export default EnterBlock
