import React from 'react'

import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import {
	Container as ContainerStyled
} from './styles'

const Home = () =>
	<ContainerStyled>
		<Header/>
		<Body />
		<Footer />
	</ContainerStyled>

export default Home
