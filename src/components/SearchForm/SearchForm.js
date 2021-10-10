import './SearchForm.css'
import React from 'react'
import Lens from '../../images/text__COLOR_invisible.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
	const [movieName, setMovieName] = React.useState([])
	const [errors, setErrors] = React.useState({})
	const [isValid, setIsValid] = React.useState(false)

	const searchButtonClassName = `${
		isValid ? 'movies__searcher_button' : 'movies__searcher_button-disabled'
	}`

	function handleSubmit(evt) {
		evt.preventDefault()
		props.startPreloader()
		props.movieSearch(movieName)
		props.showEmptySearchMsg()
	}

	function handleMovieNameChange(evt) {
		const target = evt.target
		const name = target.name
		const value = target.value
		setMovieName(value)
		setErrors({ ...errors, [name]: target.validationMessage })
		setIsValid(target.closest('form').checkValidity())
	}
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
						onChange={handleMovieNameChange}
					/>
				</div>

				<button className={searchButtonClassName} type='submit' onSubmit={handleSubmit}>
					<img
						src={Lens}
						//onClick={props.handleSearch}
						alt='Лупа'
						className='movies__searcher_button-image'
					/>
				</button>
			</form>
			<FilterCheckbox />
		</div>
	)
}
export default SearchForm
