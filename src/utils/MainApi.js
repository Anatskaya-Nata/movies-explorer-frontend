/**class MainApi {
	constructor({ address }) {
		this._address = address
	}

	getUserData() {
		return fetch(`${this._address}/users/me`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
		}).then(this._checkResponse)
	}
}

const config = {
	address: 'https://api.movies.diploma.nomoredomains.monster',

	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
}

const mainApi = new MainApi(config)

export default mainApi*/
