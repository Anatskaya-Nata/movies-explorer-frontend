import React, { useEffect, useState } from 'react'
import './Profile.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Form from '../Form/Form'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import MenuButton from '../MenuButton/MenuButton'

function Profile(props) {
	const currentUser = React.useContext(CurrentUserContext)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [nameError, setNameError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [formValid, setFormValid] = useState(false)
	const [isInputDisabled, setIsInputDisabled] = useState(true)

	const [messageServerError, setMessageServerError] = React.useState('')
	React.useEffect(() => {
		if (props.serverError === 409)
			setMessageServerError('Пользователь с такими данными уже зарегистрирован')
	}, [props.serverError])

	React.useEffect(() => {
		if (currentUser !== undefined) {
			setName(currentUser.data.name)
			setEmail(currentUser.data.email)
		}
	}, [currentUser])

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

	function changeInputDisabled() {
		setIsInputDisabled(!isInputDisabled)
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.onEditUser({ name: name, email: email })
		changeInputDisabled()
	}

	useEffect(() => {
		if (nameError || emailError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [nameError, emailError])

	useEffect(() => {
		if (name && email && !nameError && !emailError) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [name, email, nameError, emailError])

	useEffect(() => {
		if (currentUser.data.name === name && currentUser.data.email === email) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [name, email, currentUser.data.name, currentUser.data.email])

	return (
		<div className='profile'>
			{' '}
			<Header name='menu'>
				<MenuButton
					showMenu={props.showMenu}
					isShowMenu={props.isShowMenu}
					closeMenu={props.closeMenu}
				/>
			</Header>
			<Form
				name='pro'
				title={`Привет, ${currentUser.data.name}!`}
				button_title='Редактировать'
				errorText={props.errorText}
				valid={formValid}
				onSubmit={handleSubmit}
				link={
					<Link to='/' className='signform__bottom_container' onClick={props.logOut}>
						<p className='signform__bottom_link signform__bottom_link-pro'>
							Выйти из аккаунта
						</p>
					</Link>
				}
			>
				<ErrorMessage errorText={nameError} name={'profile'} />
				<div className='signform__input_block signform__input_block-pro'>
					<h3 className='signform__input_subtitle signform__input_subtitle-pro'>Имя</h3>
					<input
						id='log-name'
						type='text'
						name='name'
						placeholder='Имя'
						required
						minLength='2'
						maxLength='30'
						value={name || ''}
						onChange={handleChangeName}
						disabled={!isInputDisabled}
						className='signform__input signform__input_name signform__input_pro'
					/>
				</div>

				<div className='signform__input_block signform__input_block-pro'>
					<h3 className='signform__input_subtitle signform__input_subtitle-pro'>
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
						value={email || ''}
						onChange={handleChangeEmail}
						disabled={!isInputDisabled}
						className='signform__input signform__input_mail signform__input_pro'
					/>
				</div>
				<ErrorMessage errorText={emailError} name={'profile'} />
				{props.serverError ? (
					<span className='auth__form-message-error'>{messageServerError}</span>
				) : (
					<></>
				)}
			</Form>
		</div>
	)
}

export default Profile
