import api from '../../../../Global/api'

export const publications = ({ token, page }) => {
	return new Promise((resolve, reject) => {
		api
			.get(`/auth/post?page=${page}`, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => resolve(data))
			.catch(err => reject(err))

	})
}


export const like = ({ _id, token }) => {
	return new Promise((resolve, reject) => {
		api
			.post(`/auth/post/like/${_id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => resolve(data))
			.catch(err => reject(err))

	})
}

export const comment = ({ _id, data, token }) => {
	return new Promise((resolve, reject) => {
		api
			.post(`/auth/post/comment/${_id}`, data, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => resolve(data))
			.catch(err => reject(err))
	})
}
