class MainApi {
	constructor({ address }) {
		this._address = address
	}
	_checkResponse(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
		console.log(res)
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
		return fetch(`${this._address}/users/me`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email
			}),
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
