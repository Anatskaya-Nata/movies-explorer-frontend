import './Movies.css'
import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies(props) {
	return (
		<div className='movies'>
			<SearchForm />
			<MoviesCardList />
			<button className='movies__button-more' type='button'>
				Ещё
			</button>
		</div>
	)
}

export default Movies
