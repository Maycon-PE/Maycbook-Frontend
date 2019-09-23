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
