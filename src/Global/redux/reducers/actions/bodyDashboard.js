import types from '../types'

function action() {
	return {

		fall(state, action) {
			return { ...state, bodyDashboard: action.data }
		},

		call(index) {
			return {
				type: types.BODY_DASHBOARD,
				data: index
			}	
		}

	}
}

export default action()
