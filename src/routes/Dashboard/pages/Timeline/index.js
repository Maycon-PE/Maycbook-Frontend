import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import socket from 'socket.io-client'

import * as requests from './requests'

import { baseURL } from '../../../../Global/api'
import disconnect from '../../../../Global/redux/reducers/actions/disconnectSocket'

import Publication from './Components/Publication'
import Post from './Components/Posts'

import {
	Container as ContainerStyled
} from './styles'


const Timeline = ({ payload, setDisconnectSocket }) => {
	const [ready, setReady] = useState({ status: false, msg: 'Carregando' })
	const [posts , setPosts] = useState([])

	const doRequest = () => {
		const token = payload.token

		requests
			.publications(token)
			.then(data => {
				const newPosts = data.posts.reduce((current, next) => {

					current.push({
						...next,
						stats: { ...data.stats.find(({ _id }) => _id == next.stats) }
					})

					return current

				}, [])

				setPosts(newPosts)
				!ready.status && setReady({ ...ready, status: true })
			}).catch(err => setReady({ status: false, msg: 'Houve um erro' }))
	}

	const startSocket = () => {
		const io = socket(baseURL, {
			query: {
				user_id: +payload.id,
				mode: 'posts'
			}
		})

		setDisconnectSocket(() => {
			io.close()
		})

		io.on('new_post', () => {
			console.log(1)
			doRequest()
		})
	}

	const actions = {
		like: (_id, cb) => {
			requests
				.like({ _id, token: payload.token })
				.then(data => cb(data))
				.catch(() => cb(null))
		}
	}

	useEffect(() => {
		doRequest()
		startSocket()
	}, [])


	const renderPosts = posts => {
		const pBody = []

		posts.forEach(element => {
			pBody.push(<Post key={`publication-${element.stats._id}`} data={element} fb={ actions } />)
		})

		return pBody
	}

	return (
		<ContainerStyled>
			<Publication />
			{ ready.status ? renderPosts(posts) : <h1>{ ready.msg }</h1> }
		</ContainerStyled>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		setDisconnectSocket: fb => {
			dispatch(disconnect.call(fb))
		}
	}
}

const mapStateToProps = state => ({ payload: state.payload })

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)