import types from '../types'

function action() {
	return {

		fall(state, action) {
			const newPayload = { ...state.payload }

			action.data.type === 'dialogues' && (() => {
				const dialogue = newPayload.documents.user.dialogues.find(cvs => cvs.who === action.data.dialogue.who)

				if (dialogue) {
					newPayload.documents.user.dialogues = newPayload.documents.user.dialogues.map(cvs => {
						return cvs.who === dialogue.who ? action.data.dialogue : cvs
					})
				} else {
					newPayload.documents.user.dialogues.unshift(action.data.dialogue)
				}
			})()
			action.data.type === 'notifications' && newPayload.documents.user.notifications.unshift(action.data.notification)

			return { ...state, payload: newPayload }
		},

		call(data) {
			return {
				type: types.NOTIFICATIONS,
				data
			}	
		}

	}
}

export default action()
