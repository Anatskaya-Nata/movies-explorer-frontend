import React from 'react'
import FormForProfile from '../FormForProfile/FormForProfile'

function Profile(props) {
	return (
		<section className='login'>
			<FormForProfile
				name='pro'
				title='Привет, Виталий!'
				bottom_text='Редактировать'
				bottom_link='Выйти из аккаунта'
			/>
		</section>
	)
}

export default Profile
