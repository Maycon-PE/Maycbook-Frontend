import React from 'react'
import { connect } from 'react-redux'

import payload from '../../../../../../../../Global/redux/reducers/actions/payload'

import local from '../../../../../../../../Global/functions/localStorage'

import {
	Ul as UlStyled,
	Li as LiStyled
} from './styles'

const Normal = ({ nft, cvt, cvs, resetPayload, push, name, qtd_notifications, qtd_dialogues }) => {

	const exit = () => {
		resetPayload()
		local.remove()
		push('/')
	}

	return (
		<UlStyled>
			<LiStyled qtd={ qtd_notifications } onClick={ nft }><i className='fa fa-globe'></i></LiStyled>
			<LiStyled qtd={ qtd_dialogues } onClick={ cvs }><i className='fa fa-comments'></i></LiStyled>
			<LiStyled onClick={ () => window.confirm(`Deseja realmente sair, ${ name }?`) && exit() }><i className='fa fa-sign-out'></i></LiStyled>
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

const mapStateToProps = state => 
	({ 
		push: state.push, name: state.payload.name,
		qtd_notifications: state.payload.documents.user.notifications.length,
		qtd_dialogues: state.payload.documents.user.dialogues.length
	})

export default connect(mapStateToProps, mapDispatchToProps)(Normal)
