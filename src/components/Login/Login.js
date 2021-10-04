import React from 'react'
import FormForLog from '../FormForLog/FormForLog'

function Login(props) {
	return (
		<section className='login'>
			<FormForLog
				name='log'
				title='Рады видеть!'
				button_title='Войти'
				bottom_text='Еще не зарегистрированы?'
				bottom_link='Регистрация'
			/>
		</section>
	)
}

export default Login
