import React from 'react'

import { baseURL } from '../../../../../../../../Global/api'

import {
	Container as ContainerStyled,
	Header as HeaderStyled,
	Profile as ProfileStyled,
	Desc as DescStyled,
	Body as BodyStyled
} from './styles'

const Comment = ({ data }) => {
	const { date, image, msg, name, who } = data

	return (
		<ContainerStyled>
			<HeaderStyled>
				<ProfileStyled>
					<img src={`${baseURL}/files/uploads/${image}`} alt='Foto do comentárista' />
				</ProfileStyled>
				<DescStyled>
					<span className='comment_name'>{ name }</span>
					<span className='comment_date'>{ date }</span>
				</DescStyled>
			</HeaderStyled>
			<BodyStyled>
				<p>{ msg }</p>
			</BodyStyled>
		</ContainerStyled>
	)
}

export default Comment
