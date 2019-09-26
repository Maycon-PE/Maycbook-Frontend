import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, disconnectSocket: action.data }
		},

		call(fb) {
			return {
				type: types.CLOSE_SOCKET,
				data: fb
			}	
		}

	}
}

export default action()
