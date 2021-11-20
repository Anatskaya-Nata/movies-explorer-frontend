import './MenuButton.css'
import { React } from 'react'
import Burger from '../../images/icon__COLOR_icon-main.svg'
import Menu from '../Menu/Menu'

function MenuButton(props) {
	function openCloseMenu() {
		//console.log('Открытие меню должно быть')
		props.showMenu()
	}
	return (
		<>
			<button className='menu__button' type='button' onClick={openCloseMenu}>
				<img src={Burger} alt='кнопка меню' className='menu__button_image' />
			</button>
			<Menu isShowMenu={props.isShowMenu} closeMenu={props.closeMenu} />
		</>
	)
}

export default MenuButton
