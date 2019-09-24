import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import history from '../../Global/redux/reducers/actions/history'
import payload from '../../Global/redux/reducers/actions/payload'
import responsive from '../../Global/redux/reducers/actions/responsive'

import Nav from './Components/Nav'

import Profile from './pages/Profile'
import Timeline from './pages/Timeline'

import local from '../../Global/functions/localStorage'

import * as requests from './requests'

import {
	Loading as LoadingStyled,
	Container as ContainerStyled
} from './styles'

const Dashboard = ({ history, push, setPush, payload, setPayload, bodyDashboard, responsived, setResponsive }) => {
	const [preparetion, setPreparetion] = useState({ ready: false, msg: 'Carregando' })

	useEffect(() => {
		if (window.innerWidth <= 715) {
			!responsived && setResponsive(true)
		} else {
			responsived && setResponsive(false)
		}
	}, [])

	useEffect(() => {

		const verifyPush = msg => {
			if (push) {
				if (msg && typeof msg === 'string') {
					toast.error(msg)
					push('/')
				} else {
					// Reconectar

					requests
						.reconnect(local.get())
						.then(res => {
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

	useEffect(() => {
		document.body.onresize = ({ currentTarget }) => {
			if (currentTarget.innerWidth <= 715) {
				!responsived && setResponsive(true)
			} else {
				responsived && setResponsive(false)
			} 
		}
	}, [responsived])

	!push && setPush(history.push)

	const renderBody = index => {
		switch(index) {
			case 0:
				return <Profile />
				break;
			default:
				return <Timeline />
		}
	}

	return preparetion.ready ? <ContainerStyled>
		<Nav />
		{ renderBody(bodyDashboard) }
		</ContainerStyled> : <LoadingStyled> <img src='./imagens/loading.gif' alt='Imagem de loading' /> </LoadingStyled>
}

const mapDispatchToProps = dispatch => {
	return {
		setPush: push => {
			dispatch(history.call(push))
		},
		setPayload: data => {
			dispatch(payload.call(data))
		},
		setResponsive: responsived => {
			dispatch(responsive.call(responsived))
		}
	}
}

const mapStateToProps = state => 
	({ 
		push: state.push, 
		payload: state.payload, 
		bodyDashboard: state.bodyDashboard,
		responsived: state.responsived 
	})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
