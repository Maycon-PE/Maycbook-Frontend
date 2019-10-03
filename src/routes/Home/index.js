import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import history from '../../Global/redux/reducers/actions/history'
import payload from '../../Global/redux/reducers/actions/payload'

import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import local from '../../Global/functions/localStorage'

import {
	Container as ContainerStyled
} from './styles'

const Home = ({ history, push, setPush, payload, resetPayload, mySocket }) => {
	!push && setPush(history.push)

	useEffect(() => {
		payload && resetPayload()
		mySocket && mySocket.close()
		toast.dismiss()
	}, [])

	useEffect(() => {
		local.get() && (() => {
			if (window.confirm('Uma conta está aberta. Prosseguir?')) {
				history.push('/maycbook')
			} else {
				local.remove()
			}
		})()
	}, [])

	return (
		<ContainerStyled>
			<Header/>
			<Body />
			<Footer />
		</ContainerStyled>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		setPush: push => {
			dispatch(history.call(push))
		},
		resetPayload: () => {
			dispatch(payload.call(null))
		}
	}
}

const mapStateToProps = state => 
	({ 
		push: state.push,
		payload: state.payload,
		mySocket: state.socket
	})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
