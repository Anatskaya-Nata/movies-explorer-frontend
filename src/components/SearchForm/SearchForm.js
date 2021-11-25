import './SearchForm.css'
import React from 'react'
import Lens from '../../images/text__COLOR_invisible.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [placeholderMessage, setPlaceHolderMessage] = React.useState('Фильм')
	const inputRef = React.createRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (searchQuery.trim().length === 0) {
			setPlaceHolderMessage('Нужно ввести ключевое слово')
			inputRef.current.focus()
		} else {
			props.getInitialMovies(searchQuery)
			setSearchQuery('')
		}
	}

	const handleChangeSearchInput = (e) => {
		setSearchQuery(e.target.value)
		handleEmptySearchRequest()
	}

	const handleEmptySearchRequest = () => {
		setPlaceHolderMessage('Фильм')
	}

	return (
		<div className='movies__searcher'>
			<form className='movies__searcher_form' onSubmit={handleSubmit}>
				<div className='movies__searcher_input-container'>
					<input
						type='text'
						name='movie'
						required=''
						ref={inputRef}
						value={searchQuery}
						placeholder={placeholderMessage}
						className='movies__searcher_input-text'
						minLength='1'
						maxLength='30'
						onChange={handleChangeSearchInput}
					/>
				</div>
				<button className='movies__searcher_button' type='submit'>
					<img src={Lens} alt='Лупа' className='movies__searcher_button-image' />
				</button>
			</form>
			<FilterCheckbox
				shortMovieFilter={props.shortMovieFilter}
				onCheckboxChange={props.onCheckboxChange}
			/>
		</div>
	)
}
export default SearchForm
