import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import * as requests from './requests'

import NewPublication from '../../Components/Toasts/IO/NewPublication'

import NextBack from './Components/NextBack'
import Publication from './Components/Publication'
import Post from './Components/Posts'

import {
	Container as ContainerStyled,
	LoadMore as LoadMoreStyled
} from './styles'


const Timeline = ({ payload, mySocket }) => {
	const [showLoadMore, setShowLoadMore] = useState(true)
	const [page, setPage] = useState(0)
	const [pagination, setPagination] = useState({ count: 1, limit: 1 })
	const [ready, setReady] = useState({ status: false, msg: 'Carregando' })
	const [posts , setPosts] = useState([])

	const doRequest = (more = true) => {
		const token = payload.token

		requests
			.publications({ token, page: page })
			.then(data => {
					const newPosts = data.data.posts.reduce((current, next) => {

						current.push({
							...next,
							stats: { ...data.data.stats.find(({ _id }) => _id == next.stats) }
						})

						return current

					}, [])

				setPosts(newPosts)

				if (pagination.count !== data.pagination.count || pagination.limit !== data.pagination.limit) setPagination({ ...data.pagination })
					
				!ready.status && setReady({ ...ready, status: true })
			}).catch(err => setReady({ status: false, msg: 'Houve um erro' }))
	}


	const startSocket = () => {

		mySocket.on('connect', () => {
			// doRequest(false)
			console.log('connect')
		})

		mySocket.on('disconnect', () => {
			console.log('disconnect')
		})

		mySocket.on('requests', where => {
			// Contem problemas de estado

			// console.log('page ', page)
			// console.log('where ', where)
			// console.log(where === page)
			where === page && doRequest()
			if (typeof where === 'object' && +where.who !== +payload.id) toast.info(<NewPublication data={ where } />)
		})
	}

	const actions = {
		like: (_id, cb) => {
			requests
				.like({ _id, token: payload.token, page })
				.then(() => {
					doRequest()
					cb(true)
				}).catch(() => cb(false))
		},
		comment: (_id, data, cb) => {
			requests
				.comment({ _id, data, token: payload.token, page })
				.then(() => {
					doRequest()
					cb(true)
				}).catch(() => cb(false))
		}
	}

	const next = () => page + 3 <= pagination.count && setPage(page + 3)

	const back = () => page - 3 >= 0 && setPage(page - 3)

	useEffect(() => {
		doRequest()
	}, [page])

	useEffect(() => {
		mySocket && startSocket()
	}, [mySocket])


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
			<NextBack nextf={ next } nextv={ page + 3 >= pagination.count } backf={ back } backv={ page === 0 } />
			{ ready.status ? posts.length ? (<Fragment>
				{ renderPosts(posts) }
				<NextBack nextf={ next } nextv={ page + 3 >= pagination.count } backf={ back } backv={ page === 0 } />
				</Fragment>) : <h1>Seja o primeiro a publicar!</h1> : <h1>{ ready.msg }</h1> }
		</ContainerStyled>
	)
}

const mapStateToProps = state => ({ payload: state.payload, mySocket: state.socket })

export default connect(mapStateToProps)(Timeline)