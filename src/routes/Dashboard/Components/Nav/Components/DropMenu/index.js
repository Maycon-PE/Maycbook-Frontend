import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import Responsive from './Components/Responsived'
import Normal from './Components/Normal'

import {
	Container as ContainerStyled
} from './styles'

const MsgMenu = ({ responsived }) => 
	<ContainerStyled responsivided={ responsived }>
		{ responsived ? <Responsive /> :  <Normal /> }
	</ContainerStyled>	

const mapStateToProps = state => ({ responsived: state.responsived })

export default connect(mapStateToProps)(MsgMenu)
