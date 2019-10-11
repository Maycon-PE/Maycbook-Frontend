import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, socket: action.data }
		},

		call(socket) {
			return {
				type: types.SOCKET,
				data: socket
			}	
		}

	}
}

export default action()
