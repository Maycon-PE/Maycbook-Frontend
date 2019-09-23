import React from 'react'

import {
	Container as ContainerStyled
} from './styles'

const Erro = () =>
	<ContainerStyled>
		<p>Ocorreu um erro interno <strong>GRAVE</strong></p>
		<p className='_result_error'>Erro relatado com sucesso!</p>
	</ContainerStyled>

export default Erro
