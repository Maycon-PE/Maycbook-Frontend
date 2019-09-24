import initialState from './initial_state'
import types from './types'

import payload from './actions/payload'
import history from './actions/history'
import bodyDashboard from './actions/bodyDashboard'
import responsive from './actions/responsive'

export default function(state, action) {

	switch(action.type) {

		case types.INIT: 
			return payload.fall(state, action);

		case(types.PUSH):
			return history.fall(state, action);

		case(types.BODY_DASHBOARD):
			return bodyDashboard.fall(state, action);

		case(types.RESPONSIVE):
			return responsive.fall(state, action)	;

		default:
			return state || initialState
	}

}

