//export const BASE_URL = 'http://api.movies.diploma.nomoredomains.monster'
//export const BASE_URL = 'http://localhost:3000'
export const BASE_URL = 'http://localhost:3001'

const checkResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Ошибка: ${res.status}`)
	}
	return res.json()
}

export const register = (name, email, password) =>
	fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, password }),
	})
		.then(checkResponse)
		.then((res) => {
			return res
		})

export const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	})
		.then(checkResponse)
		.then((data) => {
			if (data.token) {
				localStorage.setItem('jwt', data.token)
				return data
			} else {
				return
			}
		})
}

export const getUser = (token) =>
	fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(checkResponse)
		.then((data) => {
			return data
		})
