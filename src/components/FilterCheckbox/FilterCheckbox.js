import './FilterCheckbox.css'
import React from 'react'

function FilterCheckbox(props) {
	return (
		<div className='movies__searcher_check'>
			<input
				type='checkbox'
				className='checkbox'
				id='check'
				checked={props.isShortMovies}
				onChange={props.handleToggleCheckbox}
			/>
			<label htmlFor='check'>
				<span className='checkbox_text'>Короткометражка</span>
			</label>
		</div>
	)
}

export default FilterCheckbox
