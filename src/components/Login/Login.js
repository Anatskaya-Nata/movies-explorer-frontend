import React from 'react'
import FormForLog from '../FormForLog/FormForLog'
import { Link } from 'react-router-dom'
import './Login.css'

function Login(props) {
	const [messageServerError, setMessageServerError] = React.useState('')
	React.useEffect(() => {
		if (props.serverError === 400) setMessageServerError('Введены некорректные данные')
		if (props.serverError === 401) setMessageServerError('Неверный логин или пароль')
	}, [props.serverError])

	function submitForm(email, password) {
		props.onLogin(email, password)
	}
	return (
		<section className='login'>
			<FormForLog
				name='log'
				title='Рады видеть!'
				button_title='Войти'
				bottom_text='Еще не зарегистрированы?'
				onSubmit={submitForm}
				errorText={props.errorText}
				messageServerError={messageServerError}
				serverError={props.serverError}
				link={
					<Link to='/signup' className='signform__bottom_container'>
						<p className='signform__bottom_link signform__bottom_link-log'>Регистрация</p>
					</Link>
				}
			/>
		</section>
	)
}

export default Login
