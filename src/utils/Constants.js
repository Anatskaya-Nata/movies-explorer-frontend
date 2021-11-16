export const MOVIES_API = {
	URL: 'https://api.nomoreparties.co/beatfilm-movies',
}

export const filterMovies = (movie, searchBar) => {
	if (movie.nameRU.toString().toLowerCase().includes(searchBar.toLowerCase())) {
		return movie
	}
	return
}
