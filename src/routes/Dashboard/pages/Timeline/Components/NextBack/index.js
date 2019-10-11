import React from 'react'

import {
	Container as ContainerStyled,
	Button as ButtonStyled
} from './styles'

const LoadMore = ({ backf, nextf, nextv, backv }) => 
	<ContainerStyled>
		<ButtonStyled className='back' v={ backv } onClick={ backf }>Anterior</ButtonStyled> 
		<ButtonStyled className='next' v={ nextv } onClick={ nextf }>Próximo</ButtonStyled>
	</ContainerStyled>

export default LoadMore
