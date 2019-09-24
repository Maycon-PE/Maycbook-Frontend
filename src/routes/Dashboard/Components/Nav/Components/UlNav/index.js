import React, { useState } from 'react'
import { connect } from 'react-redux'

import bodyDashboard from '../../../../../../Global/redux/reducers/actions/bodyDashboard'

import {
	Ul as UlStyled,
	Profile as ProfileStyled,
	Button as ButtonStyled
} from './styles'

const UlNav = ({ name, toggleBody, index }) => {
	return (
		<UlStyled>
			<li>
				<ButtonStyled active={ index === 0 } onClick={() => toggleBody(0)}>
					<ProfileStyled src='https://www.pena.com.br/wp-content/uploads/2017/05/user-icon.jpg' alt='Imagem do usuário' />{ name.split(' ')[0] }
				</ButtonStyled>
			</li>
			<li>
				<ButtonStyled active={ index === 1 } onClick={() => toggleBody(1)}>
					Página Inicial
				</ButtonStyled>
			</li>
			<li>
				<ButtonStyled active={ index === 2 }>
					Encontrar Amigos
				</ButtonStyled>
			</li>
		</UlStyled>
	)
}

const mapDispatchToProps = dispacth => {
	return {
		toggleBody: index => {
			dispacth(bodyDashboard.call(index))
		}
	}
}

const mapStateToProps = state => 
	({ name: state.payload.name, index: state.bodyDashboard })

export default connect(mapStateToProps, mapDispatchToProps)(UlNav)
