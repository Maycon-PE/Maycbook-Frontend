import api from '../../../../../../Global/api'

export const store = (data) => {
	return new Promise((resolve, reject) => {

		const formData = new FormData()

		Object.entries(data)
			.forEach(slice => {
				formData.append(slice[0], slice[1])
			})

		console.log(formData)

		api
			.post('/user', formData, { headers: { ['Content-Type']: 'multipart/form-data' } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject(err)
			})
	})
}


