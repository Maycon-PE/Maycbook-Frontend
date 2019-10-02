import api from '../../../../../../Global/api'

export const like = ({ _id, token }) => {
	return new Promise((resolve, reject) => {
		api
			.post(`/auth/post/like/${_id}`, {}, { headers: { Authoriztion: `Bearer ${token}` } })
			.then(({ data }) => {
				resolve(data)
			}).catch(err => reject(err))

	})
}
