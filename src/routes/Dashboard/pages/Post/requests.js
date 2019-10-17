import api from '../../../../Global/api'

export const post = ({ _id, token }) => {
	return new Promise((resolve, reject) => {
		api
			.get(`/auth/post/${_id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => reject(err))
	})
}
