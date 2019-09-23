import api from '../../../../../../Global/api'

export const store = (data) => {
	return new Promise((resolve, reject) => {
		api
			.post('/user', data)
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject(err)
			})
	})
}


