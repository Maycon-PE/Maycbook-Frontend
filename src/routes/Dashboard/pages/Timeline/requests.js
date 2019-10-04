import api from '../../../../Global/api'

export const publications = ({ token, page }) => {
	return new Promise((resolve, reject) => {
		api
			.get(`/auth/post?page=${page}`, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => resolve(data))
			.catch(err => reject(err))

	})
}


export const like = ({ _id, token, page }) => {
	return new Promise((resolve, reject) => {
		api
			.post(`/auth/post/like/${_id}/${page}`, {}, { headers: { Authorization: `Bearer ${token}` } })
			.then(() => resolve())
			.catch(err => reject(err))

	})
}

export const comment = ({ _id, data, token, page }) => {
	return new Promise((resolve, reject) => {
		api
			.post(`/auth/post/comment/${_id}/${page}`, data, { headers: { Authorization: `Bearer ${token}` } })
			.then(() => resolve())
			.catch(err => reject(err))
	})
}

