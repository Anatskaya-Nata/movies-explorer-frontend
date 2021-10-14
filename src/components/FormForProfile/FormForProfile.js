import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function FormForProfile(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [nameError, setNameError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [formValid, setFormValid] = useState(false)

	function handleChangeName(e) {
		const validName = /^[a-zA-Z- ]+$/.test(e.target.value)

		if (e.target.value.length < 2) {
			setNameError('Длина имени должна быть не менее 2 символов')
		} else if (e.target.value.length > 30) {
			setNameError('Длина имени должна должна быть не более 30 символов')
		} else if (!validName) {
			setNameError('Имя должно быть указано латиницей')
		} else {
			setNameError('')
		}
		setName(e.target.value)
	}

	function handleChangeEmail(e) {
		const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value)

		if (!validEmail) {
			setEmailError('Неверный формат почты')
		} else {
			setEmailError('')
		}
		setEmail(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.onSubmit(name, email)
	}

	useEffect(() => {
		if (name && email && !nameError && !emailError) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [name, email, nameError, emailError])

	return (
		<Form
			name={props.name}
			title={props.title}
			button_title={props.button_title}
			bottom_text={props.bottom_text}
			bottom_link={props.bottom_link}
			valid={!formValid}
			onSubmit={handleSubmit}
		>
			<ErrorMessage errorText={nameError} name={'profile'} />
			<div className={`signform__input_block signform__input_block-${props.name}`}>
				<h3 className={`signform__input_subtitle signform__input_subtitle-${props.name}`}>
					Имя
				</h3>
				<input
					id='log-name'
					type='text'
					name='name'
					placeholder='Имя'
					required
					minLength='2'
					maxLength='30'
					value={name}
					//defaultValue='Виталий '
					onChange={handleChangeName}
					className={`signform__input signform__input_name signform__input_${props.name}`}
				/>
			</div>

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
					//defaultValue='pochta@yandex.ru| '
					onChange={handleChangeEmail}
					className={`signform__input signform__input_mail signform__input_${props.name}`}
				/>
			</div>
			<ErrorMessage errorText={emailError} name={'profile'} />
		</Form>
	)
}

export default FormForProfile
