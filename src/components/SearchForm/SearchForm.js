import './SearchForm.css'
import React from 'react'
import Lens from '../../images/text__COLOR_invisible.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
	return (
		<div className='movies__searcher'>
			<form className='movies__searcher_form'>
				<div className='movies__searcher_input-container'>
					<input
						type='text'
						name='movie'
						required=''
						placeholder='Фильм'
						className='movies__searcher_input-text'
						minLength='2'
						maxLength='30'
					/>
				</div>
				<button className='movies__searcher_button' type='submit'>
					<img src={Lens} alt='Лупа' className='movies__searcher_button-image' />
				</button>
			</form>
			<FilterCheckbox />
		</div>
	)
}
export default SearchForm
