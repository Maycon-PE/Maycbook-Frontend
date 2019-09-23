import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import history from '../../Global/redux/reducers/actions/history'

import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import local from '../../Global/functions/localStorage'

import {
	Container as ContainerStyled
} from './styles'

const Home = ({ history, push, setPush, }) => {
	!push && setPush(history.push)

	useEffect(() => {
		push && local.get() && (() => {
			if (window.confirm('Uma conta está aberta. Prosseguir?')) {
				push('/maycbook')
			} else {
				local.remove()
			}
		})()
	}, [push])

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
		}
	}
}

const mapStateToProps = state => 
	({ 
		push: state.push
	})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
