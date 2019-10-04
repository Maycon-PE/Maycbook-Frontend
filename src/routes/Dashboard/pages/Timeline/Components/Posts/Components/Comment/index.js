import React from 'react'
import { connect } from 'react-redux'

import { baseURL } from '../../../../../../../../Global/api'

import {
	Container as ContainerStyled,
	Img as ImgStyled,
	Name as NameStyled,
	Msg as MsgStyled
} from './styles'

const Comment = ({ data, user_id }) => {
	const { name, date, image, msg, who } = data

	return (<ContainerStyled>
		<NameStyled>
			<span className='name'>{ +who === user_id ? 'Você' : name }</span><span className='date'>{ date || '12/12/12:12/12/12' }</span>
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

const mapStateToProps = state => ({ user_id: state.payload.id  })

export default connect(mapStateToProps)(Comment)
