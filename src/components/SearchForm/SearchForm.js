import './SearchForm.css'
import React from 'react'
import Lens from '../../images/text__COLOR_invisible.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [placeholderMessage, setPlaceHolderMessage] = React.useState('Фильм')
	//const [isPlaceholderShow, setPlaceholderShow] = React.useState(false)
	const inputRef = React.createRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		// если строка без пробельных символов равна нулю устанавливаем фокус полю

		if (searchQuery.trim().length === 0) {
			setPlaceHolderMessage('Нужно ввести ключевое слово')
			//setPlaceholderShow(true)
			inputRef.current.focus()
		} else {
			props.getInitialMovies(searchQuery)

			// очищаем поле формы при каждом сабмите
			setSearchQuery('')
		}
	}

	const handleChangeSearchInput = (e) => {
		setSearchQuery(e.target.value)
		handleEmptySearchRequest()
	}

	const handleEmptySearchRequest = () => {
		//setPlaceholderShow(false)
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
						//className={`${isPlaceholderShow ? 'movies__searcher_input-text' : ''}`}
						className='movies__searcher_input-text'
						minLength='2'
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
