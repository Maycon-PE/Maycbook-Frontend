import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, push: action.data }
		},

		call(push) {
			return {
				type: types.PUSH,
				data: push
			}	
		}

	}
}

export default action()
