class MainApi {
	constructor({ address }) {
		this._address = address
	}
	_checkResponse(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
		return res.json()
	}

	getUserData() {
		return fetch(`${this._address}/users/me`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
		}).then(this._checkResponse)
	}

	setUserData(data) {
		console.log(data)
		return fetch(`${this._address}/users/me`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
			}),
		}).then(this._checkResponse)
	}

	setMovies(newMovieData) {
		console.log(newMovieData.country)
		return fetch(`${this._address}/movies`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				movieId: newMovieData.movieId,
				country: newMovieData.country,
				director: newMovieData.director,
				duration: newMovieData.duration,
				year: newMovieData.year,
				description: newMovieData.description,
				image: newMovieData.image,
				trailer: newMovieData.trailer,
				thumbnail: newMovieData.thumbnail,
				nameRU: newMovieData.nameRU,
				nameEN: newMovieData.nameEN,
			}),
		}).then(this._checkResponse)
	}

	getSavedMovies() {
		return fetch(`${this._address}/movies`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
		}).then(this._checkResponse)
	}

	deleteCard(id) {
		return fetch(`${this._address}/movies/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
		}).then(this._checkResponse)
	}

	changeLikeCardStatus(id, like) {
		return fetch(`${this._address}/movies/${id}`, {
			method: like ? 'PUT' : 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
		}).then(this._checkResponse)
	}
}

const config = {
	//address: 'https://api.movies.diploma.nomoredomains.monster',
	address: 'http://localhost:3001',

	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
}

const mainApi = new MainApi(config)

export default mainApi
