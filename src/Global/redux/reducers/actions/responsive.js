import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, responsived: action.data }
		},

		call(responsived) {
			return {
				type: types.RESPONSIVE,
				data: responsived
			}	
		}

	}
}

export default action()
