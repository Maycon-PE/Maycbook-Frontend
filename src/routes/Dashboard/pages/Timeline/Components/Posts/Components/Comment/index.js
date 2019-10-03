import React from 'react'

import { baseURL } from '../../../../../../../../Global/api'

import {
	Container as ContainerStyled,
	Img as ImgStyled,
	Name as NameStyled,
	Msg as MsgStyled
} from './styles'

const Comment = ({ data }) => {
	const { name, date, image, msg } = data

	return (<ContainerStyled>
		<NameStyled>
			<span className='name'>{ name }</span><span className='date'>{ date || '12/12/12:12/12/12' }</span>
		</NameStyled>
		<MsgStyled>
			<ImgStyled>
				<img 
					src={`${baseURL}/files/uploads/${image}`} 
					alt={`Imagem do usuário ${name}`} />
			</ImgStyled>
			<p>{ msg }</p>
		</MsgStyled>
	</ContainerStyled>) 
}

export default Comment
