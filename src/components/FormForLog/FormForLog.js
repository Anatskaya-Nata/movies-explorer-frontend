import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function FormForLog(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [formValid, setFormValid] = useState(false)

	function handleChangeEmail(e) {
		const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value)

		if (!validEmail) {
			setEmailError('Неверный формат почты')
		} else {
			setEmailError('')
		}
		setEmail(e.target.value)
	}

	function handleChangePassword(e) {
		if (e.target.value.length < 6) {
			setPasswordError('Пароль должен быть не менее 6 символов')
		} else {
			setPasswordError('')
		}
		setPassword(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.onSubmit(email, password)
	}

	useEffect(() => {
		if (email && password && !emailError && !passwordError) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [email, password, emailError, passwordError])

	return (
		<Form
			name={props.name}
			title={props.title}
			button_title={props.button_title}
			bottom_text={props.bottom_text}
			bottom_link={props.bottom_link}
			valid={!formValid}
			onSubmit={handleSubmit}
			link={props.link}
		>
			<div className={`signform__input_block signform__input_block-${props.name}`}>
				<h3 className={`signform__input_subtitle signform__input_subtitle-${props.name}`}>
					E-mail
				</h3>
				<input
					id='log-input'
					type='email'
					name='mail'
					placeholder='Email'
					required
					minLength='2'
					maxLength='30'
					value={email}
					//defaultValue='pochta@yandex.ru '
					onChange={handleChangeEmail}
					className={`signform__input signform__input_mail signform__input_${props.name}`}
				/>
				<ErrorMessage errorText={emailError} name={'log-reg'} />
			</div>
			<div className={`signform__input_block signform__input_block-${props.name}`}>
				<h3 className={`signform__input_subtitle signform__input_subtitle-${props.name}`}>
					Пароль
				</h3>
				<input
					id='password-input'
					type='password'
					name='password'
					placeholder='Пароль'
					required
					minLength='2'
					maxLength='30'
					value={password}
					///defaultValue='123456'
					onChange={handleChangePassword}
					className={`signform__input signform__input_password signform__input_${props.name}`}
				/>
				<ErrorMessage errorText={passwordError} name={'log-reg'} />
			</div>
		</Form>
	)
}

export default FormForLog
