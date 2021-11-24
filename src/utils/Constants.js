export const MOVIES_API = {
	URL: 'https://api.nomoreparties.co/beatfilm-movies',
}

export const FILTERDMOVIES = (movie, searchBar) => {
	if (movie.nameRU.toString().toLowerCase().includes(searchBar.toLowerCase())) {
		return movie
	}
	return
}

export const MOVIES_DURATION = (mins) => {
	const hours = Math.trunc(mins / 60)
	const minutes = mins % 60
	return hours + 'ч ' + minutes + 'м'
}

export const MAX_SHORT_MOVIE_DURATION = 40

export const NUMBER_OF_CARDS_MAX_WIDTH = 12
export const NUMBER_OF_CARDS_MIDDLE_WIDTH = 8
export const NUMBER_OF_CARDS_MIN_WIDTH = 5
