export const BASE_URL = 'http://api.movies.diploma.nomoredomains.monster'
//export const BASE_URL = 'http://localhost:3000'

const checkResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Ошибка: ${res.status}`)
	}
	return res.json()
}

export const register = (name, password, email) =>
	fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, password, email }),
	})
		.then(checkResponse)
		.then((res) => {
			return res
		})

export const authorize = (password, email) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, email }),
	})
		.then(checkResponse)
		.then((data) => {
			console.log(data)
			if (data.token) {
				localStorage.setItem('jwt', data.token)
				console.log(localStorage)
				return data
			} else {
				return
			}
		})
}

export const getContent = (token) =>
	fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(checkResponse)
		.then((data) => {
			console.log(data)
			return data
		})
