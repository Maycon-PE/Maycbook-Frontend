import React from 'react'

import { baseURL } from '../../../../../../Global/api'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Img as ImgStyled,
	Msg as MsgStyled,
	Footer as FooterStyled
} from './styles'

const Notification = ({ data }) => {
	const { mode, who, name, image, date, msg } = data

	return (
		<ContainerStyled>
			<AreaStyled>
				<MsgStyled>
					<p>{ mode === 'like' ? `${name} curtiu uma publicação sua` : msg }</p>
				</MsgStyled>
				<ImgStyled>
					<img 
						src={`${baseURL}/files/uploads/${image}`} 
						alt={`Imagem do/da ${ name }`} />
				</ImgStyled>
			</AreaStyled>
			<FooterStyled>
				<span className='name'>{ name }</span>
				<span className='date'>{ date }</span>
			</FooterStyled>
		</ContainerStyled>
	)
}

export default Notification
