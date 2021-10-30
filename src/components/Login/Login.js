import React from 'react'
import FormForLog from '../FormForLog/FormForLog'
import { Link } from 'react-router-dom'

function Login(props) {
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
				//bottom_link='Регистрация'
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
