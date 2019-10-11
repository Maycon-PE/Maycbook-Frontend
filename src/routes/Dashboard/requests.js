import api from '../../Global/api'

export const reconnect = token => {
	return new Promise((resolve, reject) => {
		api
			.post('/auth/reconnect', {}, { headers: { Authorization: `Bearer ${ token }` } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject('Token inspirado!')
			})
	})
}

export const notifications = ({ token, mode }) => {
	return new Promise((resolve, reject) => {
		api
			.get(`/auth/user/${mode}`, { headers: { Authorization: `Bearer ${ token }` } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject(err)
			})
	})
}
