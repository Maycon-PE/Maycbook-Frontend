import api from '../../../../../../Global/api'

export const send = ({ data, token }) => {
	return new Promise((resolve, reject) => {

		const formData = new FormData()

		formData.append('text', data.text)

		formData.append('image', data.image)

		api
			.post('/auth/post', formData, { headers: { Authorization: `Bearer ${token}`, ['Content-Type']: 'multipart/form-data' } })
			.then(() => resolve())
			.catch(() => reject())

	})
}
