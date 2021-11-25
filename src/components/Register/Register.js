import './Register.css'
import React from 'react'
import FormForSign from '../FormForSign/FormForSign'
import { Link } from 'react-router-dom'

function Register(props) {
	const [messageServerError, setMessageServerError] = React.useState('')

	React.useEffect(() => {
		if (props.serverError === 400) setMessageServerError('Введены некорректные данные')
		if (props.serverError === 409)
			setMessageServerError('Такой пользователь уже существует')
	}, [props.serverError])

	function submitForm(name, email, password) {
		props.onRegister(name, email, password)
	}

	return (
		<section className='registration'>
			<FormForSign
				name='reg'
				title='Добро пожаловать!'
				button_title='Зарегистрироваться'
				bottom_text='Уже зарегистрированы?'
				errorText={props.errorText}
				messageServerError={messageServerError}
				serverError={props.serverError}
				onSubmit={submitForm}
				link={
					<Link to='/signin' className='signform__bottom_container'>
						<p className='signform__bottom_link signform__bottom_link-reg'>Войти</p>
					</Link>
				}
			/>
		</section>
	)
}

export default Register
