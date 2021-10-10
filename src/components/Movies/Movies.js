import './Movies.css'
import React from 'react'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
//import moviesApi from '../../utils/MoviesApi'

function Movies(props) {
	/*
		const [initialMovies, setInitialMovies] = React.useState([])
	
	React.useEffect(() => {
	moviesApi
		.getInitialCards()
		.then((cardData) => {
			setInitialMovies(cardData)
		})
		.catch((err) => console.log(err))
}, [])


	const handleSearchMovie = useCallback(
		(request) => {
			// eslint-disable-next-line no-unused-vars
			const str = request.toLowerCase()
			const set = new Set(requestCards)

			console.log('set')

			initialCards.forEach((item) => {
				if (request) {
					set.add(item)
				}
				console.log(requestCards)
			})

			setRequestCards(set)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[initialCards],
	)*/

	return (
		<div className='movies'>
			<SearchForm
				startPreloader={props.startPreloader}
				showEmptySearchMsg={props.howEmptySearchMsg}
				movieSearch={props.movieSearch}
				handleToggleCheckbox={props.handleToggleCheckbox}
				isShortMovies={props.isShortMovies}
			/>
			<MoviesCardList cards={props.cards} isVisible={props.isVisible} />
		</div>

		/*<div className='movies'>
<SearchForm handleSearch={handleSearchMovie} />
<MoviesCardList movies={Array.from(initialMovies)} />
</div>*/
	)
}

export default Movies

/*React.useEffect(() => {
	moviesApi
		.getInitialCards()
		.then((cardData) => {
			setInitialCards(cardData)
		})
		.catch((err) => console.log(err))
}, [])

const handleSearchMovie = useCallback(
	(request) => {
		const str = request.toLowerCase()
		const set = new Set(requestCards)

		console.log('set')

		initialCards.forEach((item) => {
			if (request) {
				set.add(item)
			}
			console.log(requestCards)
		})

		setRequestCards(set)
	},
	[requestCards],
)
*/
