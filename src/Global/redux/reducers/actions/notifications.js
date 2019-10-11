import types from '../types'

function action() {
	return {

		fall(state, action) {
			const newPayload = { ...state.payload }

			// action.data.type === 'dialogues' && (() => {
			// 	const dialogue = newPayload.documents.user.dialogues.find(cvs => cvs.who === action.data.data.who)

			// 	if (dialogue) {
			// 		newPayload.documents.user.dialogues = newPayload.documents.user.dialogues.map(cvs => {
			// 			return cvs.who === dialogue.who ? action.data.data : cvs
			// 		})
			// 	} else {
			// 		newPayload.documents.user.dialogues.unshift(action.data.dialogue)
			// 	}
			// })()

			if (action.data.type === 'dialogues') {
				newPayload.documents.user.dialogues = action.data.data
			} else {
				newPayload.documents.user.notifications = action.data.data
			}

			// action.data.type === 'notifications' && (() => {
			// 	if (+state.payload.id !== +action.data.notification.who) newPayload.documents.user.notifications.unshift(action.data.notification)
			// })()

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
