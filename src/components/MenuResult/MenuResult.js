import React from 'react'
import SavedMovies from '../SavedMovies/SavedMovies'
import Menu from '../Menu/Menu'

function MenuResult(props) {
	return (
		<main className='page'>
			<SavedMovies />
			<Menu />
		</main>
	)
}

export default MenuResult
