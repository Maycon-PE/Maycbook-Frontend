function storage() {
	return {

		get() {
			return localStorage.getItem('token')
		},

		set(token) {
			localStorage.setItem('token', token)
		},

		remove() {
			localStorage.removeItem('token')
		}

	}
}

export default storage()
