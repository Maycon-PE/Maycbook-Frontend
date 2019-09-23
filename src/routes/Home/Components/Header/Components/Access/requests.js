import api from '../../../../../../Global/api'

export const login = (data) => {
	return new Promise((resolve, reject) => {
		api
			.post('/login', data)
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject(err)
			})
	})
}

