import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import SavedCardList from '../SavedCardList/SavedCardList'

function SavedMovies(props) {
	return (
		<div className='movies'>
			<SearchForm />
			<SavedCardList />
		</div>
	)
}

export default SavedMovies
