import api from '../../../../../../Global/api'

export const comments = ({ _id, token }) => {
	return new Promise((resolve, reject) => {
		api
			.get(`/auth/post/${_id}/comments`, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => {
				reject(err)
			})
	})
}
