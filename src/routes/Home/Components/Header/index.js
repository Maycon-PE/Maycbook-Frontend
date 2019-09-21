import React from 'react'

import Access from './Components/Access'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Logo as LogoStyled,
	Access as AccessStyled
} from './styles'

const Home = () =>
	<ContainerStyled>
		<AreaStyled>
			<LogoStyled>maycbook</LogoStyled>
			<AccessStyled>
				<Access />
			</AccessStyled>
		</AreaStyled>
	</ContainerStyled>

export default Home
