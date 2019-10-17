import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import * as requests from './requests'

import local from '../../../../Global/functions/localStorage'

import { reconnect } from '../../requests'

import payloadAction from '../../../../Global/redux/reducers/actions/payload'

import Publication from './Components/Publication'

import {
	Loading as LoadingStyled
} from './styles'

const initial_req = {
	status: false,
	ok: false
}

const Post = ({ history, match, payload, setPayload }) => {
	const [req, setReq] = useState({ ...initial_req }) 
	const [data, setData] = useState(null)

	useEffect(() => {

		if (payload) {

			const _id = match.params.id
			const token = payload.token

			requests
				.post({ token, _id })
				.then(post => {
					console.log(post)
					setData(post)
					setReq({ status: true, ok: true })
				}).catch(err => {
					setReq({ status: true, ok: false })
					console.log(err)
				})


		} else {

			if (local.get()) {

				reconnect(local.get())
					.then(myPayload => {

						setPayload(myPayload)

					}).catch(err => {
						history.push('/')
					})

			} else {

				history.push('/')

			}

		} 

	}, [history, match, payload])

	return req.status ? req.ok ? <Publication data={data} /> : <h1>Ocorreu um erro</h1> : <LoadingStyled> <img src='./imagens/loading.gif' alt='Imagem de loading' /> </LoadingStyled>
}

const mapDispatchToProps = dispatch => {
	return {
		setPayload: payload => {
			dispatch(payloadAction.call(payload))
		}
	}
}

const mapStateToProps = state => ({ payload: state.payload })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
