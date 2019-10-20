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
	const { mode, name, image, date, msg } = data

	const getMsg = () => {
		switch(mode) {
			case 'like':
				return  `${name} curtiu uma publicação sua`

			case 'comment':
				return msg

			case 'dislike':
				return `${name} tirou a sua curtida em uma publicação sua`

			default:
				return 'Indefinido'	
		}
	}

	return (
		<ContainerStyled>
			<AreaStyled>
				<MsgStyled>
					<p>{ getMsg() }</p>
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
