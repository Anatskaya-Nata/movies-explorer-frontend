import './Register.css'
import React from 'react'
import FormForSign from '../FormForSign/FormForSign'

function Register(props) {
	return (
		<section className='registration'>
			<FormForSign
				name='reg'
				title='Добро пожаловать!'
				button_title='Зарегистрироваться'
				bottom_text='Уже зарегистрированы?'
				bottom_link='Войти'
			/>
		</section>
	)
}

export default Register
