import React from 'react'
import { connect } from 'react-redux'

import payload from '../../../../../../../../../Global/redux/reducers/actions/payload'

import local from '../../../../../../../../../Global/functions/localStorage'

import {
	Ul as UlStyled,
	Li as LiStyled
} from './styles'

const Drops = ({ fb, resetPayload, push, name, qtd_notifications, qtd_dialogues }) => {

	const exit = () => {
		resetPayload()
		local.remove()
		push('/')
	}

	return (
		<UlStyled>
			<LiStyled qtd={ qtd_notifications } onClick={ fb.nft }>Notificações</LiStyled>
			<LiStyled qtd={ qtd_dialogues } onClick={ fb.cvs }>Mensagens</LiStyled>
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
		qtd_notifications: state.payload.documents.user.notifications.filter(({ who }) => +who !== +state.payload.id).length,
		qtd_dialogues: state.payload.documents.user.dialogues.length
	})

export default connect(mapStateToProps, mapDispatchToProps)(Drops)
