import React from 'react'
import Form from '../Form/Form'

function FormForProfile(props) {
	return (
		<Form
			name={props.name}
			title={props.title}
			button_title={props.button_title}
			bottom_text={props.bottom_text}
			bottom_link={props.bottom_link}
		>
			<div className={`signform__input_block signform__input_block-${props.name}`}>
				<h3 className={`signform__input_subtitle signform__input_subtitle-${props.name}`}>
					Имя
				</h3>
				<input
					id='log-name'
					type='text'
					name='name'
					placeholder='Имя'
					required=''
					minLength='2'
					maxLength='30'
					defaultValue='Виталий '
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
					required=''
					minLength='2'
					maxLength='30'
					defaultValue='pochta@yandex.ru '
					className={`signform__input signform__input_mail signform__input_${props.name}`}
				/>
			</div>
		</Form>
	)
}

export default FormForProfile
