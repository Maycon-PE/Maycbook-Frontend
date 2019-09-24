import React from 'react'

import Search from './Components/Search'
import UlNav from './Components/UlNav'
import DropMenu from './Components/DropMenu'

import {
	Container as ContainerStyled,
	Area as AreaStyled
} from './styles/'

const Nav = () => {

	return (
		<ContainerStyled>
			<AreaStyled>
				<img src='./imagens/dashboard/nav/logo.png' alt='Logo do projeto' />
				<Search />
				<UlNav />
				<DropMenu />
			</AreaStyled>
		</ContainerStyled>
	)

}

export default Nav
