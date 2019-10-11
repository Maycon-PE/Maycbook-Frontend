import React, { Fragment } from 'react'

import { baseURL } from '../../../../../../Global/api'

import {
	Area as AreaStyled,
	Img as ImgStyled,
	Msg as MsgStyled,
	Footer as FooterStyled
} from './styles'

const NewPublication = ({ data }) => {
	const { who, name, image, path } = data

	return (
		<Fragment>
			<AreaStyled>
				<MsgStyled>
					<img 
						src={`${baseURL}/files/uploads/${image}`}
						alt={`Imagem do/da ${ 'Rhianna' }`} />
					<p>{ name }</p>
				</MsgStyled>
				<ImgStyled>
					<img 
						src={`${baseURL}/files/uploads/${path}`} 
						alt={`Imagem do/da ${ name }`} />
				</ImgStyled>
			</AreaStyled>
			<FooterStyled>
				<span>Fez uma nova publicação</span>
			</FooterStyled>
		</Fragment>
	)
}

export default NewPublication
