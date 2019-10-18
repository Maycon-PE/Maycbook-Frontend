import React, { useState, useEffect } from 'react'
import { Widget, addResponseMessage, addUserMessage   } from 'react-chat-widget'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import socket from 'socket.io-client'

import 'react-chat-widget/lib/styles.css'

import Notification from './Components/Toasts/IO/Notification'
import Dialogue from './Components/Toasts/IO/Dialogues'

import { baseURL } from '../../Global/api'

import history from '../../Global/redux/reducers/actions/history'
import payload from '../../Global/redux/reducers/actions/payload'
import responsive from '../../Global/redux/reducers/actions/responsive'
import storeSocket from '../../Global/redux/reducers/actions/socket'
import notifications from '../../Global/redux/reducers/actions/notifications'

import Nav from './Components/Nav'

import Profile from './pages/Profile'
import Timeline from './pages/Timeline'

import local from '../../Global/functions/localStorage'

import * as requests from './requests'

import {
	Loading as LoadingStyled,
	Container as ContainerStyled
} from './styles'

const Dashboard = ({ history, push, setPush, payload, setPayload, bodyDashboard, responsived, setResponsive, setSocket, setNotifications }) => {
	const [preparetion, setPreparetion] = useState(false)

	const doRequest = mode => {
		const token = payload.token

		requests
			.notifications({ token, mode })
			.then(result => {
				setNotifications({ type: mode, data: result })
			}).catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		if (window.innerWidth <= 715) {
			!responsived && setResponsive(true)
		} else {
			responsived && setResponsive(false)
		}
	}, [])

	const startSocket = () => {

		const options = {
			closeOnClick: false
		}
		
		const io = socket(baseURL, {
			query: {
				user_id: payload.id
			}
		})

		io.on('connect', () => {

			setSocket(io)

			io.on('actions', data => {
				toast.info(<Notification data={ data } />, options)
				doRequest('notifications')
			})

			io.on('dialogues', data => {
				toast.info(<Dialogue data={ data } />, options)
				doRequest('dialogues')
			})

			io.on('posts_deleted', ids => {
				toast.error(<p>Inconcistência de dados e publicações foram excluidas<br />{ ids.join(' - ') }</p>)
			})	
			
			io.on('talk_all', data => {
				if (data.who_id !== payload.id) {
					addResponseMessage(`${ data.name } - ${data.msg}`)
				}
			})

		})
	}

	useEffect(() => {
		const reconnect = () => {
			if (payload === null || Object.values(payload).length === 0) {
				requests
					.reconnect(local.get())
					.then(res => {					
						setPayload(res)
					}).catch(err => {
						local.remove()
						toast.error(err)
						history.push('/')
					})
			}
		}

		if (local.get()) {
			reconnect()
		} else {
			toast.error('Sem token')
			history.push('/')	
		}
	

	}, [])

	useEffect(() => {
		payload && Object.values(payload).length && (() => {
			setPreparetion(true)	
			startSocket()
		})()
	}, [payload])

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
			case 1:
				return <Profile />
			default:
				return <Timeline />
		}
	}

	const handleNewUserMessage = (msg) => {
		requests
			.talkAll({ token: payload.token, msg })
			.then(res => {
				console.log(res)
			})
			.catch(err => console.log(err))	
	}
	
	return preparetion ? 
		<ContainerStyled> 
			<Nav />
			<Widget
				title='Super Chat'
				subtitle='Bate-papo com todos'
				senderPlaceHolder='Escreva aqui!'
				handleNewUserMessage={ handleNewUserMessage } />
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
		},
		setSocket: socket => {
			dispatch(storeSocket.call(socket))
		},
		setNotifications: data => {
			dispatch(notifications.call(data))
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
