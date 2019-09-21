import React from 'react'

import logo from './images/logo-apresentation.jpg'

import Form from './Components/Form'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Img as ImgStyled
} from './styles'

const Body = () => 
	<ContainerStyled>
		<AreaStyled>
			<ImgStyled>
				<img src={ logo } alt='Imagem de fundo' />
			</ImgStyled>
			<Form />
		</AreaStyled>
	</ContainerStyled>

export default Body
