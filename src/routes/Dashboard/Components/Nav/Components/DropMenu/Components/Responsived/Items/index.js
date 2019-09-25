import React from 'react'
import { connect } from 'react-redux'

import payload from '../../../../../../../../../Global/redux/reducers/actions/payload'

import local from '../../../../../../../../../Global/functions/localStorage'

import {
	Ul as UlStyled,
	Li as LiStyled
} from './styles'

const Drops = ({ resetPayload, push, name, qtd_notifications, qtd_invites, qtd_dialogues }) => {

	const exit = () => {
		resetPayload()
		local.remove()
		push('/')
	}

	return (
		<UlStyled>
			<LiStyled qtd={ qtd_invites }>Convites</LiStyled>
			<LiStyled qtd={ qtd_notifications }>Notificações</LiStyled>
			<LiStyled qtd={ qtd_dialogues }>Mensagens</LiStyled>
			<LiStyled onClick={ () => window.confirm(`Deseja realmente sair, ${ name }?`) && exit() }>sair</LiStyled>
		</UlStyled>
	)

}

const mapDispatchToProps = dispatch => {
	return {
		resetPayload: () => dispatch(payload.call(null))
	}
}

const mapStateToProps = state => 
	({ 
		push: state.push, name: state.payload.name,
		qtd_notifications: state.payload.documents.user.notifications.length,
		qtd_invites: state.payload.documents.user.invites.length,
		qtd_dialogues: state.payload.documents.user.dialogues.length
	})

export default connect(mapStateToProps, mapDispatchToProps)(Drops)
