import initialState from './initial_state'
import types from './types'
import payload from './actions/payload'
import history from './actions/history'

export default function(state, action) {

	switch(action.type) {

		case types.INIT: 
			return payload.fall(state, action);

		case(types.PUSH):
			return history.fall(state, action);

		default:
			return state || initialState
	}

}

