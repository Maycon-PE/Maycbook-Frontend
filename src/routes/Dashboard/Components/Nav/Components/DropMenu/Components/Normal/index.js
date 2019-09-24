import React from 'react'
import { connect } from 'react-redux'

import payload from '../../../../../../../../Global/redux/reducers/actions/payload'

import local from '../../../../../../../../Global/functions/localStorage'

import {
	Ul as UlStyled
} from './styles'

const Normal = ({ resetPayload, push, name }) => {

	const exit = () => {
		resetPayload()
		local.remove()
		push('/')
	}

	return (
		<UlStyled>
			<li><i className='fa fa-user-plus'></i></li>
			<li><i className='fa fa-globe'></i></li>
			<li><i className='fa fa-comments'></i></li>
			<li onClick={ () => window.confirm(`Deseja realmente sair, ${ name }?`) && exit() }><i className='fa fa-sign-out'></i></li>
		</UlStyled>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		resetPayload: () => {
			dispatch(payload.call(null))
		}
	}
}

const mapStateToProps = state => ({ push: state.push, name: state.payload.name })

export default connect(mapStateToProps, mapDispatchToProps)(Normal)
