class MoviesApi {
	constructor({ address }) {
		this._address = address
	}

	getInitialCards() {
		return fetch(`${this._address}/beatfilm-movies`, {
			//headers: {
			//  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			// },
		}).then(this._checkResponse)
	}

	_checkResponse(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
		return res.json()
	}
}

const config = {
	address: 'https://api.nomoreparties.co',

	//address: 'https://api.frontend.mesto.nomoredomains.monster',
	//address: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		//Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
}

const moviesApi = new MoviesApi(config)

export default moviesApi
