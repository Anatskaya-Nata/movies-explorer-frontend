import './FilterCheckbox.css'
import React from 'react'

function FilterCheckbox(props) {
	return (
		<div className='movies__searcher_check'>
			<input
				type='checkbox'
				className='checkbox'
				id='check'
				checked={props.shortMovieFilter}
				onChange={props.onCheckboxChange}
			/>
			<label htmlFor='check'>
				<span className='checkbox_text'>
					{props.shortMovieFilter ? 'Короткометражки' : 'Не короткометражки'}
				</span>
			</label>
		</div>
	)
}

export default FilterCheckbox
