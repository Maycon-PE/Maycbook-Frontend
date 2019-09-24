import React from 'react'
import { connect } from 'react-redux'

import payload from '../../../../../../../../../Global/redux/reducers/actions/payload'

import local from '../../../../../../../../../Global/functions/localStorage'

import {
	Ul as UlStyled
} from './styles'

const Drops = ({ resetPayload, push, name }) => {

	const exit = () => {
		resetPayload()
		local.remove()
		push('/')
	}

	return (
		<UlStyled>
			<li>Convites</li>
			<li>Notificações</li>
			<li>Mensagens</li>
			<li onClick={ () => window.confirm(`Deseja realmente sair, ${ name }?`) && exit }>sair</li>
		</UlStyled>
	)

}

const mapDispatchToProps = dispatch => {
	return {
		resetPayload: () => dispatch(payload.call(null))
	}
}

const mapStateToProps = state => ({ push: state.push, name: state.payload.name })

export default connect(mapStateToProps, mapDispatchToProps)(Drops)
