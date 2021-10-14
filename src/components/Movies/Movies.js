import './Movies.css'
import React, { useCallback } from 'react'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import moviesApi from '../../utils/MoviesApi'

function Movies(props) {
	const [initialMovies, setInitialMovies] = React.useState([])
	const [requestMovies, setRequestMovies] = React.useState(new Set())

	React.useEffect(() => {
		moviesApi
			.getInitialCards()
			.then(setInitialMovies)

			.catch((err) => console.log(err))
	}, [])

	const handleSearchMovie = useCallback(
		(request) => {
			// eslint-disable-next-line no-unused-vars
			const str = request.toLowerCase()
			const set = new Set(requestMovies)

			console.log(request)

			initialMovies.forEach((item) => {
				if (request) {
					set.add(item)
				}
				console.log('Попали')
			})

			setRequestMovies(set)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[initialMovies],
	)

	return (
		/*<div className='movies'>
			<SearchForm
				startPreloader={props.startPreloader}
				showEmptySearchMsg={props.howEmptySearchMsg}
				movieSearch={props.movieSearch}
				handleToggleCheckbox={props.handleToggleCheckbox}
				isShortMovies={props.isShortMovies}
			/>
			<MoviesCardList cards={props.cards} isVisible={props.isVisible} />
		</div>*/

		<div className='movies'>
			<SearchForm onGetMovies={handleSearchMovie} />
			<MoviesCardList movies={Array.from(requestMovies)} />
		</div>
	)
}

export default Movies
