import './SearchForm.css'
import React, { useState } from 'react'
import Lens from '../../images/text__COLOR_invisible.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function SearchForm(props) {
	const [findedMovieValue, setFindedMovieValue] = useState('')
	const [error, setError] = React.useState('')
	const [isFormValid, setFormValid] = React.useState(false)

	const searchButtonClassName = `${
		isFormValid ? 'movies__searcher_button' : 'movies__searcher_button-disabled'
	}`

	function handleSearchMovie(e) {
		setFindedMovieValue(e.target.value)
		if (e.target.value.length === 0) {
			setError('Нужно ввести ключевое слово')
		} else {
			setError('')
		}
		console.log(e.target.value.length)
	}

	function handleSubmit(e) {
		e.preventDefault()
		setError('')
		props.onGetMovies(findedMovieValue)
		setFindedMovieValue('')
	}

	React.useEffect(() => {
		if (findedMovieValue && !error) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [findedMovieValue, error])

	return (
		<div className='movies__searcher'>
			<form className='movies__searcher_form'>
				<div className='movies__searcher_input-container'>
					<input
						type='text'
						name='movie'
						required
						placeholder='Фильм'
						className='movies__searcher_input-text'
						minLength='2'
						maxLength='30'
						value={findedMovieValue || ''}
						onChange={handleSearchMovie}
					/>
					<ErrorMessage errorText={error} />
				</div>

				<button
					className={searchButtonClassName}
					type='submit'
					onSubmit={props.handleSearchMovie}
					disabled={!isFormValid}
					onClick={handleSubmit}
				>
					<img src={Lens} alt='Лупа' className='movies__searcher_button-image' />
				</button>
			</form>
			<FilterCheckbox />
		</div>
	)
}
export default SearchForm
