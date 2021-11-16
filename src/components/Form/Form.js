import './Form.css'
import React from 'react'
import headerLogo from '../../images/headerLogo.svg'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function Form(props) {
	//const [text, setText] = React.useState('')
	/* function handleChangeText(e) {
		setText(e.target.value)
	}*/
	return (
		<form className={`signform signform__${props.name}`} onSubmit={props.onSubmit}>
			<div className={`signform__top signform__top_${props.name}`}>
				<img
					src={headerLogo}
					alt='Логотип'
					className={`header__logo header__logo_${props.name}`}
				/>
				<h2 className={`signform__title signform__title_${props.name}`}>{props.title}</h2>
			</div>

			<div>{props.children}</div>
			<ErrorMessage
				name={props.name}
				errorText={props.errorText}
				//onChange={handleChangeText}
				//value={text}
			/>
			<button
				className={`signform__button signform__button_${props.name} signform__button
				 ${props.valid ? `signform__button_disabled` : ''}`}
				type='submit'
				onClick={props.onClick}
				disabled={props.valid}
			>
				{props.button_title}
			</button>

			<div className={`signform__bottom_block signform__bottom_block-${props.name}`}>
				<p className={`signform__bottom_text signform__bottom_text-${props.name}`}>
					{props.bottom_text}
				</p>
				{props.link}
			</div>
		</form>
	)
}
export default Form
