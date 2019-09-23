import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import history from '../../Global/redux/reducers/actions/history'
import payload from '../../Global/redux/reducers/actions/payload'

import local from '../../Global/functions/localStorage'

import * as requests from './requests'

const Dashboard = ({ history, push, setPush, payload, setPayload }) => {
	const [preparetion, setPreparetion] = useState({ ready: false, msg: 'Carregando' })

	useEffect(() => {

		const verifyPush = msg => {
			if (push) {
				if (msg && typeof msg === 'string') {
					toast.error(msg)
					push('/')
				} else {
					// Reconectar

					!payload && requests
						.reconnect(local.get())
						.then(res => {
							console.log('res ', res)
							setPayload({ ...res, token: local.get() })
							setPreparetion({ ...preparetion, ready: true })
						}).catch(err => {
							local.remove()
							toast.error(err)
							push('/')
						})

				}

			} else {
				msg && setPush(history.push)
			}
		}

		const verifyToken = next => {
			if (local.get()) {

				!next && local.set(payload.token)

				verifyPush(null)
				
			} else {
				verifyPush('Token não presente')
			}
		}

		if (payload === null) {
			verifyToken(true)
		} else {
			if (payload.token) {
				verifyToken(false)
			} else {
				verifyPush('Payload mal formatado')
			}
		}

	}, [push])

	!push && setPush(history.push)

	return preparetion.ready ? <h1>{ JSON.stringify(payload, ['email', 'name'], 4) }</h1> : <h1>{ preparetion.msg }</h1>
}

const mapDispatchToProps = dispatch => {
	return {
		setPush: push => {
			dispatch(history.call(push))
		},
		setPayload: data => {
			dispatch(payload.call(data))
		}
	}
}

const mapStateToProps = state => ({ push: state.push, payload: state.payload })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
