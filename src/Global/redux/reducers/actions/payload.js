import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, payload: action.data }
		},

		call(payload) {
			return {
				type: types.INIT,
				data: {
					...payload
				}
			}	
		}

	}
}

export default action()
