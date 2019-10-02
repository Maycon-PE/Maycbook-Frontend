import React, { useState } from 'react'
import { connect } from 'react-redux'

import { baseURL } from '../../../../../../Global/api'

import bodyDashboard from '../../../../../../Global/redux/reducers/actions/bodyDashboard'

import {
	Ul as UlStyled,
	Profile as ProfileStyled,
	Button as ButtonStyled
} from './styles'

const UlNav = ({ name, toggleBody, image, index }) => {
	return (
		<UlStyled>
			<li>
				<ButtonStyled active={ index === 0 } onClick={() => toggleBody(0)}>
					<ProfileStyled src={`${baseURL}/files/uploads/${image}`} alt='Imagem do usuário' />{ name.split(' ')[0] }
				</ButtonStyled>
			</li>
			<li>
				<ButtonStyled active={ index === 1 } onClick={() => toggleBody(1)}>
					Página Inicial
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
	({ name: state.payload.name, index: state.bodyDashboard, image: state.payload.image })

export default connect(mapStateToProps, mapDispatchToProps)(UlNav)
