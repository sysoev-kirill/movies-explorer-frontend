class MainApi {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;

	}

	_onRes(response) {
		return response.ok ? response.json() : Promise.reject({ ...response, message: "Ошибка на стороне сервиса" });
	}

	getUserMovies() {
		return fetch(`${this._baseUrl}/movies`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then(this._onRes)
	}


	getInfoAboutUser() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then(this._onRes)
	}

	editUserProfileInfo(dataProfile) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: dataProfile.name,
				email: dataProfile.email
			})
		}).then(this._onRes)
	}

	// addMovie(movie) {
	// 	return fetch(`${this._baseUrl}/movies`, {
	// 		method: 'POST',
	// 		headers: {
	// 			authorization: `Bearer ${localStorage.getItem("token")}`,
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(movie)
		  
	// 	}).then(this._onRes)
	// }

	addMovie(movie) {
		return fetch(`${this._baseUrl}/movies`, {
			method: 'POST',
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.id,
      })
		  
		}).then(this._onRes)
	}


	deleteMovieById(movieId) {
		return fetch(`${this._baseUrl}/cards/${movieId}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				'Content-Type': 'application/json'
			},
		}).then(this._onRes)
	}

	register(name, email, password) {
		return fetch(`${this._baseUrl}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password
			})
		}).then(this._onRes)
	}

	authorize(email, password) {
		return fetch(`${this._baseUrl}/signin`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				email,
				password
			})
		}).then(this._onRes)
	}

	checkToken(token) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'authorization': `Bearer ${token}`,
			}
		})
			.then(this._checkStatus)
	}
}

export const mainApi = new MainApi({

	// baseUrl: 'https://api.sysoev.nomoreparties.co',
	baseUrl: 'http://localhost:3000',
	headers: {
   'Content-Type': 'application/json',
},
});


